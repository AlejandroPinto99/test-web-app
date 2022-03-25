import moment from "moment";
import { InputSelectData } from "../components/InputSelect";
import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { SubscriptionTypeEnum } from "../enums/subscription-emum";
import { DateHelper } from "../helpers/dateHelper";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";
import { IntervalEnum } from "./invoicesApi";

const subscriptionApi = baseStoreApi.injectEndpoints({
  endpoints: (build) => ({
    getSubscriptions: build.query<SubscriptionsResultData[], SubscriptionArg>({
      query: (id) => ({ url: `/subscription/${id}` }),
      providesTags: (result, error, arg) => {
        return [
          ...mapProvidedTag<SubscriptionsResultData>(
            result ?? [],
            CacheTagsEnum.Subscription,
            "id"
          ),
          { type: CacheTagsEnum.Customer, id: arg },
        ];
      },
      transformResponse: (response) => response.result,
    }),
    createSubscription: build.mutation<
      CreateSubscriptionResultData,
      CreateSubscriptionRestData
    >({
      query: (data) => {
        const due = DateHelper.getDifferenceCurrentAndGivenDateInDays(
          data.dueDate
        );
        const items = typeof data.items !== "undefined" ? [...data.items] : [];

        const itemsRest = items.map((item) => ({
          description: data.isAdvancedInvoicingActive
            ? undefined
            : item.description,
          serviceId:
            data.isAdvancedInvoicingActive &&
            typeof item.description !== "string"
              ? item.description?.value
              : undefined,
          unit_amount: Number(item.unit_amount) * 100,
          quantity: Number(item.quantity),
        }));
        const dataRest = {
          type: data.isAdvancedInvoicingActive
            ? SubscriptionTypeEnum.ServiceSub
            : SubscriptionTypeEnum.BasicSub,
          customerId: data.customerId,
          items: itemsRest,
          due: due,
          surcharge: data.surcharge ?? false,
          interval: data.interval?.value,
          iterations: !data.chargeIndefinitely ? data.iterations : undefined,
        };

        return { url: "/subscription", method: "POST", data: dataRest };
      },
      transformResponse: (response) => response.result,
      invalidatesTags: (response, error, args) => [
        CacheTagsEnum.Payment,
        { type: CacheTagsEnum.Customer, id: args.customerStripeId },
      ],
    }),
    cancelSubscription: build.mutation<any, CancelSubscriptionRestData>({
      query: ({ subscriptionId }) => ({
        url: `/subscription/${subscriptionId}`,
        method: "DELETE",
      }),
      invalidatesTags: (response, error, arg) => [
        { type: CacheTagsEnum.Subscription, id: arg.subscriptionId },
        { type: CacheTagsEnum.Customer, id: arg.customerId },
      ],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useCancelSubscriptionMutation,
} = subscriptionApi;

interface SubscriptionsResultData {
  id?: string;
  created?: number;
  interval?: string;
  price?: number;
}

type SubscriptionArg = number;

interface CreateSubscriptionRestData {
  subscription?: boolean;
  customerId?: number;
  dueDate?: Date;
  surcharge?: boolean;
  interval?: InputSelectData;
  iterations?: number;
  chargeIndefinitely?: boolean;
  items?: InvoicePricingItems[];
  isAdvancedInvoicingActive?: boolean;
  customerStripeId?: string;
}

interface CreateSubscriptionResultData {
  type?: SubscriptionTypeEnum;
  customerId?: string;
  items?: InvoicePricingItems;
  due?: number;
  surcharge?: boolean;
  interval?: IntervalEnum;
  iterations?: number;
  id?: string;
  hostedInvoiceUrl?: string;
}

interface InvoicePricingItems {
  description?: string | InputSelectData;
  quantity?: number;
  unit_amount?: number;
}

interface CancelSubscriptionRestData {
  eventId?: number;
  subscriptionId?: number;
  customerId?: number;
}
