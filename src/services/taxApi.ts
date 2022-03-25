import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { baseStoreApi } from "../store/storeApi";

const taxApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getTax: builder.query<TaxResultData, void>({
      query: () => ({ url: "/tax" }),
      providesTags: [CacheTagsEnum.Tax],
      transformResponse: (response) => response.result,
    }),
    deposit: builder.mutation<void, TaxDepositRestData>({
      query: (data) => ({ url: "/tax/deposit", method: "POST", data }),
      invalidatesTags: [CacheTagsEnum.Tax],
      transformResponse: (response) => response.result,
    }),
    withdraw: builder.mutation<void, TaxWithdrawRestData>({
      query: (data) => ({ url: "/tax/withdraw", method: "POST", data }),
      invalidatesTags: [CacheTagsEnum.Tax],
      transformResponse: (response) => response.result,
    }),
    taxBucketStatus: builder.mutation<void, void>({
      query: () => ({ url: "/tax", method: "POST" }),
      invalidatesTags: [CacheTagsEnum.Tax, CacheTagsEnum.Whoami],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTaxQuery,
  useDepositMutation,
  useWithdrawMutation,
  useTaxBucketStatusMutation,
} = taxApi;

interface TaxResultData {
  taxBucketBalance?: number;
  taxCommitment?: {
    smartTaxRate?: number;
    state?: number;
    federal?: number;
  };
  deductionsSavings?: number;
  year?: string;
}

interface TaxDepositRestData {
  amount?: number;
}

interface TaxWithdrawRestData {
  amount?: number;
}
