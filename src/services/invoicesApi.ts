import { baseStoreApi } from "../store/storeApi";
import { InputSelectData } from "../components/common/InputSelect";
import { DateHelper } from "../helpers/dateHelper";
import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { PaymentResultData } from "./paymentsApi";
import { InvoiceTypeEnum } from "../enums/invoice-enum";
import { Pagination } from "./paymentsApi"

const invoiceApi = baseStoreApi.injectEndpoints({
  endpoints: (build) => ({
    getInvoices: build.query<Pagination<PaymentResultData>, InvoiceParamData | void>({
      query: (arg) => {
        const params = {
          lastInvoiceId: arg? arg?.lastInvoiceId: undefined,
        };
        return { url: "/payment/invoice", params };
      },
      providesTags: (result, error, arg) => {
        return mapProvidedTag<PaymentResultData>(
          result?.data ?? [],
          CacheTagsEnum.Invoice,
          "id"
        );
      },
      transformResponse: (response) => response.result,
    }),
    getInvoicesByCustomerId: build.query<PaymentResultData[], InvoicesRestData>(
      {
        query: (arg) => {
          const params = {
            lastInvoiceId: arg?.lastInvoiceId,
          };
          return { url: `/invoice/customer/${arg.customerId}`, params };
        },
        providesTags: (result, error, arg) => [
          { type: CacheTagsEnum.Customer, id: arg.customerStripeId },
        ],
        transformResponse: (response) => response.result,
      }
    ),
    getInvoice: build.query<InvoiceResultData, number>({
      query: (id) => ({ url: `/invoice/${id}` }),
      providesTags: (response, error, arg) => [
        { type: CacheTagsEnum.Invoice, id: arg },
      ],
      transformResponse: (response) => response.result,
    }),
    createInvoice: build.mutation<
      CreateInvoiceResponseData,
      CreateInvoiceRestData
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
            ? InvoiceTypeEnum.Service
            : InvoiceTypeEnum.Basic,
          customerId: data.customerId,
          items: itemsRest,
          due: due,
          surcharge: data.surcharge ?? false,
        };

        return { url: "/invoice", method: "POST", data: dataRest };
      },
      transformResponse: (response) => response.result,
      invalidatesTags: (response, error, args) => [
        CacheTagsEnum.Payment,
        CacheTagsEnum.Invoice,
        CacheTagsEnum.Charge,

        { type: CacheTagsEnum.Customer, id: args.customerStripeId },
      ],
    }),
    sendInvoice: build.mutation<SendInvoiceResultData, SendInvoiceRestData>({
      query: (data) => {
        const endpoint = data.subscription
          ? "subscription/send"
          : "invoice/send";
        const dataRest = {
          ...(data.subscription
            ? { customerId: data.customerId }
            : { customerStripeId: data.customerStripeId }),
          invoiceId: data.invoiceId,
          sessionId: data.sessionId,
          sms: data.sms ?? false,
          email: data.email ?? false,
        };

        return { url: endpoint, method: "POST", data: dataRest };
      },
      invalidatesTags: (response, error, args) => [
        CacheTagsEnum.Payment,
        { type: CacheTagsEnum.Customer, id: args.customerId },
      ],
    }),
    markInvoicePaid: build.mutation<void, MarkInvoicePaidRestData>({
      query: ({ invoiceId }) => ({
        url: `/invoice/${invoiceId}/mark_paid`,
        method: "PUT",
      }),
      transformResponse: (response) => response.result,
      invalidatesTags: (response, error, args) => [
        CacheTagsEnum.Payment,
        CacheTagsEnum.Invoice,
        CacheTagsEnum.Charge,
        { type: CacheTagsEnum.Customer, id: args.customerId },
      ],
    }),
    voidInvoice: build.mutation<void, VoidInvoiceRestData>({
      query: ({ invoiceId }) => ({
        url: `/invoice/${invoiceId}`,
        method: "PUT",
      }),
      transformResponse: (response) => response.result,
      invalidatesTags: (response, error, args) => [
        CacheTagsEnum.Payment,
        CacheTagsEnum.Invoice,
        CacheTagsEnum.Charge,
        { type: CacheTagsEnum.Customer, id: args.customerId },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetInvoicesQuery,
  useGetInvoiceQuery,
  useCreateInvoiceMutation,
  useVoidInvoiceMutation,
  useSendInvoiceMutation,
  useMarkInvoicePaidMutation,
  useGetInvoicesByCustomerIdQuery,
} = invoiceApi;

interface InvoicesRestData {
  customerId: string;
  customerStripeId?: string;
  lastInvoiceId?: string;
}

interface InvoiceParamData {
  lastInvoiceId?: string;
}

interface InvoiceResultData {
  id?: number;
  hosted_invoice_url?: string;
}

interface CreateInvoiceRestData {
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

interface CreateInvoiceResponseData {
  type?: InvoiceTypeEnum;
  customerId?: string;
  items?: InvoicePricingItems;
  due?: number;
  surcharge?: boolean;
}

interface InvoicePricingItems {
  description?: string | InputSelectData;
  quantity?: number;
  unit_amount?: number;
}

interface SendInvoiceRestData {
  subscription?: boolean;
  customerId?: number;
  customerStripeId?: number;
  invoiceId?: number;
  sessionId?: number;
  sms?: boolean;
  email?: boolean;
}

interface SendInvoiceResultData {
  sms?: boolean;
  email?: boolean;
}

interface VoidInvoiceRestData {
  invoiceId: number;
  customerId: number;
}

interface MarkInvoicePaidRestData {
  invoiceId: number;
  customerId: number;
}


export enum IntervalEnum {
  Day = "day",
  Week = "week",
  month = "month",
}
