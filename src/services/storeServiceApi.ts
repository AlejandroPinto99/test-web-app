import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { StoreServiceAvailabilityEnum } from "../enums/store-service-availability-enum";
import { DateHelper } from "../helpers/dateHelper";
import { formatCapitalizeFirstLetter } from "../helpers/formatters";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";

const storeServiceApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<EventsResultData[], void>({
      query: () => ({ url: "/schedule/event" }),
      providesTags: (result, error, arg) => {
        return mapProvidedTag(result ?? [], CacheTagsEnum.Event, "id");
      },
      transformResponse: (response) => response.result,
    }),
    syncCalendar: builder.query<void, void>({
      query: () => ({ url: "/schedule/sync" }),
      transformResponse: (response) => response.result,
    }),

    getServices: builder.query<ServiceResultData[], void>({
      query: () => ({ url: "/schedule/service" }),
      providesTags: (result, error, arg) => {
        return mapProvidedTag(result ?? [], CacheTagsEnum.Service, "_id");
      },
      transformResponse: (response) => response.result,
    }),
    createService: builder.mutation<
      CreateServiceResultData,
      CreateServiceRestData
    >({
      query: (data) => {
        const url = data._id
          ? `/schedule/service/${data._id}`
          : "/schedule/service";

        const constraints = data.constraints?.map((item) => ({
          _id: item._id,
          day: formatCapitalizeFirstLetter(item.day),
          start: DateHelper.get24hTimeFromDate(item.start),
          end: DateHelper.get24hTimeFromDate(item.end),
        }));
        const bundles =
          data.storeAvailability === StoreServiceAvailabilityEnum.store
            ? data.bundles?.map((item) => ({
                _id: item._id,
                stripePriceId: item.stripePriceId,
                price: (item.price ?? 0) * 100,
                quantity: item.quantity,
              }))
            : [];
        const dataRest = {
          name: data.name,
          length: data.length,
          capacity: data.capacity,
          address: data.address,
          constraints: constraints,
          bundles: bundles,
          remote: data?.remote || false,
          free: data?.free || false,
        };
        return { url: url, method: data._id ? "PUT" : "POST", data: dataRest };
      },
      invalidatesTags: [CacheTagsEnum.Service, CacheTagsEnum.Whoami],
      transformResponse: (response) => response.result,
    }),
    changeServiceStatus: builder.mutation<
      ChangeServiceStatusResultData,
      number
    >({
      query: (id) => ({ url: `/schedule/service/${id}/status`, method: "PUT" }),
      invalidatesTags: (response, error, arg) => [
        {
          type: CacheTagsEnum.Service,
          id: arg,
        },
      ],
      transformResponse: (response) => response.result,
    }),
    cancelEvent: builder.mutation<void, CancelEventRestData>({
      query: ({ eventId }) => ({
        url: `/schedule/event/${eventId}`,
        method: "DELETE",
      }),
      invalidatesTags: (response, error, arg) => [
        {
          type: CacheTagsEnum.Event,
          id: arg.eventId,
        },
        { type: CacheTagsEnum.Customer, id: arg.customerId },
      ],
      transformResponse: (response) => response.result,
    }),
    setCname: builder.mutation<CnameResultData, CnameRestData>({
      query: (data) => ({
        url: "/schedule/cname",
        method: "POST",
        data: { cname: data.cname },
      }),
      invalidatesTags: (response) => {
        if (response?.msg === "created") return [CacheTagsEnum.Whoami];
        return [];
      },
      transformResponse: (response) => response,
    }),
    bulkInvite: builder.mutation<void, BulkInviteRestData>({
      query: (data) => ({
        url: "/store/invite/bulk",
        method: "POST",
        data: { numbers: data.numbers },
      }),
      transformResponse: (response) => response.result,
    }),
    getSyncLink: builder.mutation<void, SyncLinkRestData>({
      query: (data) => ({
        url: "/schedule/sync",
        method: "POST",
        data: { calendarEmail: data.calendarEmail },
      }),
      invalidatesTags: [CacheTagsEnum.Whoami],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetServicesQuery,
  useCreateServiceMutation,
  useChangeServiceStatusMutation,
  useGetEventsQuery,
  useSyncCalendarQuery,
  useCancelEventMutation,
  useSetCnameMutation,
  useBulkInviteMutation,
  useGetSyncLinkMutation,
} = storeServiceApi;

export interface EventsResultData {
  id?: string;
  account_id?: string;
  calendar_id?: string;
  ical_uid?: string;
  message_id?: string;
  title?: string;
  description?: string;
  owner?: string;
  participants?: EventParticipants[];
  read_only?: boolean;
  location?: string;
  when?: {
    start_time?: number;
    object?: string;
    end_time?: number;
  };
  busy?: boolean;
  status?: string;
  original_start_time?: number;
  notifications?: Array<any>;
  metadata?: {
    capacity?: number;
    customerEmail?: string;
    maxCapacity?: number;
    personaEvent?: boolean;
    serviceId?: string;
  };
}

interface EventParticipants {
  name?: string;
  email?: string;
  status?: string;
}

interface ServiceResultData {
  _id?: string;
  name?: string;
  address?: string;
  length?: number;
  capacity?: number;
  constraints?: ServiceConstraint[];
  stripeProductId?: string;
  active?: boolean;
  free?: boolean;
  remote?: boolean;
  bookingMethod?: string;
  userId?: string;
  bundles?: ServiceBundle[];
}

interface ServiceConstraint {
  _id?: string;
  day?: string;
  start?: string;
  end?: string;
}

interface ServiceBundle {
  _id?: string;
  stripePriceId?: string;
  price?: number;
  quantity?: number;
}

interface CreateServiceRestData {
  _id?: string;
  constraints?: ServiceConstraint[];
  storeAvailability?: StoreServiceAvailabilityEnum;
  bundles?: ServiceBundle[];
  name?: string;
  length?: number;
  capacity?: number;
  address?: string;
  remote?: boolean;
  free?: boolean;
}

interface CreateServiceResultData extends CreateServiceRestData {
  stripeProductId?: string;
  active?: boolean;
  free?: boolean;
  remote?: boolean;
  userId?: string;
}

interface ChangeServiceStatusResultData extends CreateServiceResultData {}

interface BulkInviteRestData {
  numbers?: string[];
}

interface SyncLinkRestData {
  calendarEmail?: string;
}

interface CancelEventRestData {
  eventId?: number;
  customerId?: number;
}

interface CnameRestData {
  cname?: string;
}

interface CnameResultData {
  msg?: CnameResultMessage;
}

enum CnameResultMessage {
  Created = "created",
  Exists = "exist",
  Error = "error",
}
