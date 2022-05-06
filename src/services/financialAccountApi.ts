import { baseStoreApi } from "../store/storeApi";

const financialAccountApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialAccount: builder.query<FinancialAccountResultData, void>({
      query: () => ({ url: "/finance/account" }),
      providesTags: ["financialAccount"],
      transformResponse: (response) => response.result,
    }),
    getFinancialAccountDashboard: builder.query({
      query: () => ({
        url: `/account/financial/dashboard`,
      }),
      providesTags: ["financialAccountDashboard"],
      transformResponse: (response) => response.result,
    }),
    getCashFlow: builder.query<CashFlowRestData, void>({
     query:(data) => {
       const timezone = data

       return { url: "/finance/analytics", method: "POST", data: timezone };
     },
     transformResponse: (response) => response.result
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetFinancialAccountQuery,
  useGetFinancialAccountDashboardQuery,
  useGetCashFlowQuery,
} = financialAccountApi;

interface FinancialAccountResultData {
  financial_addresses?: Array<{
    aba?: { routing_number?: string; account_number?: string };
  }>;
}

interface CashFlowRestData {
  timezone?: string;
}
