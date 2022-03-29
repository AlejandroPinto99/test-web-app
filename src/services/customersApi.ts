import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { PaymentStatusEnum, PaymentTypeEnum } from "../enums/payment-enum";
import { StatusEnum } from "../enums/status-enum";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";
import { PaymentResultData } from "./paymentsApi";
import { EventsResultData } from "./storeServiceApi";

const customersApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<CustomersResultData[], void>({
      query: () => ({ url: "/customer" }),
      providesTags: (result, error, arg) => {
        return mapProvidedTag(result ?? [], CacheTagsEnum.Customer, "stripeId");
      },
      transformResponse: (response) =>  response.result,
    }),
    getCustomer: builder.query<CustomerResultData, number>({
      query: (id) => ({ url: `/customer/${id}` }),
      providesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: response?.stripeId },
      ],
      transformResponse: (response) => response.result,
    }),
    getCustomerCharges: builder.query<PaymentResultData[], number>({
      query: (id) => ({ url: `/customer/${id}/payment` }),
      providesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: args },
      ],
      transformResponse: (response) => response.result,
    }),
    getCustomerBookings: builder.query<CustomerBookingsResultData[], number>({
      query: (id) => ({ url: `/schedule/event/customer/${id}` }),
      providesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: args },
      ],
      transformResponse: (response) => response.result,
    }),
    createCustomer: builder.mutation<
      CreateUpdateCustomerResultData,
      CreateUpdateCustomerRestData
    >({
      query: (data) => ({ url: `/customer`, method: "POST", data }),
      invalidatesTags: [CacheTagsEnum.Customer],
      transformResponse: (response) => response.result,
    }),
    updateCustomer: builder.mutation<
      CreateUpdateCustomerResultData,
      CreateUpdateCustomerRestData
    >({
      query: (data) => {
        const dataRest = {
          name: data.name,
          phone: data.phone,
          email: data.email,
        };
        return { url: `/customer/${data._id}`, method: "PUT", data: dataRest };
      },
      invalidatesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: args.stripeId },
      ],
      transformResponse: (response) => response.result,
    }),
    changeCustomerStatus: builder.mutation<
      ChangeCustomerStatusResultData,
      ChangeCustomerStatusRestData
    >({
      query: (data) => {
        const dataRest = {
          customerId: data.customerId,
          status: data.status,
        };
        return { url: "/customer", method: "PUT", data: dataRest };
      },
      invalidatesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: args.customerStripeId },
      ],
      transformResponse: (response) => response.result,
    }),
    updateCustomerBalance: builder.mutation<
      UpdateCustomerBalanceResultData,
      UpdateCustomerBalanceRestData
    >({
      query: (data) => {
        const customerId = data.customerId;
        const dataRest = {
          balance: data.balance,
        };
        return {
          url: `/customer/${customerId}/balance`,
          method: "PUT",
          data: dataRest,
        };
      },
      invalidatesTags: (response, error, args) => [
        { type: CacheTagsEnum.Customer, id: args.customerStripeId },
      ],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCustomerQuery,
  useGetCustomersQuery,
  useGetCustomerBookingsQuery,
  useChangeCustomerStatusMutation,
  useCreateCustomerMutation,
  useGetCustomerChargesQuery,
  useUpdateCustomerMutation,
  useUpdateCustomerBalanceMutation,
} = customersApi;

export interface CustomersResultData {
  _id?: string;
  email?: string;
  emailVerified?: boolean;
  phone?: string;
  status?: StatusEnum;
  revenues?: number;
  name?: string;
  stripeId?: string;
  userId?: string;
  __v?: number;
}

interface CustomerResultData extends CustomersResultData {
  balance?: { [key: string]: number };
  namedBalance?: CustomerNamedBalance[];
}

interface CustomerBookingsResultData extends EventsResultData {
  title?: string;
  description?: string;
  owner?: string;
  location?: string;
  when?: {
    start_time?: number;
    end_time?: number;
  };
}

interface CreateUpdateCustomerRestData {
  _id: string;
  email?: string;
  name?: string;
  phone?: string;
  stripeId?: string;
}

interface CreateUpdateCustomerResultData extends CreateUpdateCustomerRestData {
  emailVerified?: boolean;
  status?: StatusEnum;
  userId?: string;
}

interface ChangeCustomerStatusRestData {
  customerId: number;
  status: StatusEnum;
  customerStripeId?: number;
}

interface ChangeCustomerStatusResultData extends CustomerResultData {}

interface UpdateCustomerBalanceRestData {
  balance?: {
    [key: string]: number;
  };
  customerId: number;
  customerStripeId?: number;
}

interface UpdateCustomerBalanceResultData extends CustomerResultData {}

interface CustomerNamedBalance {
  serviceId?: string;
  name?: string;
  value?: number;
}
