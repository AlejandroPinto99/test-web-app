import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { PaymentStatusEnum, PaymentTypeEnum } from "../enums/payment-enum";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";
import { CustomersResultData } from "./customersApi";

const paymentsApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query<PaymentResultData[], void>({
      query: () => ({ url: "/payment"}),
      providesTags: (result, error, arg) => {
        return mapProvidedTag<PaymentResultData>(
          result ?? [],
          CacheTagsEnum.Payment,
          "id"
        );
      },
      transformResponse: (response) => response.result,
    }),
    refundPayment: builder.mutation<
      RefundPaymentResultData,
      RefundPaymentRestData
    >({
      query: ({ invoiceId }) => ({
        url: `/payment/refund/${invoiceId}`,
        method: "POST",
      }),
      invalidatesTags: (response, error, arg) => [
        { type: CacheTagsEnum.Payment, id: arg.invoiceId },
        { type: CacheTagsEnum.Invoice, id: arg.invoiceId },
        { type: CacheTagsEnum.Customer, id: arg.customerId },
      ],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPaymentsQuery, useRefundPaymentMutation } = paymentsApi;

export interface PaymentResultData {
  id?: string;
  amount?: number;
  created?: number;
  description?: string;
  type?: PaymentTypeEnum;
  customer?: Pick<CustomersResultData, "name" | "phone" | "email"> & {
    id?: number;
  };
  disputed?: boolean;
  refunded?: boolean;
  receiptURL?: string;
  status?: PaymentStatusEnum;
  metadata?: {
    userId?: string;
    customerId?: string;
    serviceId?: string;
    price?: string;
    quantity?: string;
  };
}

interface RefundPaymentRestData {
  invoiceId?: number;
  customerId?: number;
}

interface RefundPaymentResultData {
  id?: string;
  object?: string;
  amount?: number;
  balance_transaction?: string;
  charge?: string;
  created?: number;
  currency?: string;
  metadata?: {};
  payment_intent?: string;
  reason?: string;
  receipt_number?: string;
  source_transfer_reversal?: string;
  status?: string;
  transfer_reversal?: string;
}
