import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { TransactionEnum } from "../enums/transaction-enum";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";

export const transactionsApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionResultData[], void>({
      query: () => ({ url: "/transaction" }),
      providesTags: (result, error, arg) => {
        return mapProvidedTag<TransactionResultData>(
          result ?? [],
          CacheTagsEnum.Transaction,
          "id"
        );
      },

      transformResponse: (response) => response.result,
    }),
    getTransaction: builder.query<TransactionResultData, number>({
      query: (id) => ({ url: `/transaction/${id}` }),
      providesTags: (response, error, arg) => [
        { type: "transaction", id: arg },
      ],
      transformResponse: (response) => response.result,
    }),
    tagTransaction: builder.mutation<
      TagTransactionResultData,
      TagTransactionRestData
    >({
      query: (data) => ({ url: `/transaction`, method: "PUT", data }),
      invalidatesTags: (response, error, arg) => [
        {
          type: "transaction",
          id: arg.trxId,
        },
      ],
      transformResponse: (response) => response.result,
    }),
    sendMoney: builder.mutation<void, SendMoneyRestData>({
      query: (data) => ({
        url: "/transaction/send_money",
        method: "POST",
        data,
      }),
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTransactionQuery,
  useGetTransactionsQuery,
  useSendMoneyMutation,
  useTagTransactionMutation,
} = transactionsApi;

interface SendMoneyRestData {
  amount?: number;
  accountHolderName?: string;
  accountNumber?: number;
  routingNumber?: string;
}

interface TagTransactionRestData {
  trxId?: string;
  tag?: TransactionEnum;
}

interface TagTransactionResultData {
  trxId?: string;
  tag?: TransactionEnum;
}

interface TransactionResultData {
  id?: string;
  amount?: number;
  balance_impact?: {
    cash?: {
      available?: number;
      inbound_pending?: number;
      outbound_pending?: number;
    };
    credit?: number;
    current?: number;
    type?: string;
  };
  created?: number;
  currency?: string;
  type?: string;
  description?: string;
  receiptURL?: string;
  tag?: TransactionEnum;
}
