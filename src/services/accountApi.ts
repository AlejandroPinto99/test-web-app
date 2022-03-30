import { baseStoreApi } from "../store/storeApi";

const accountApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountState: builder.query<AccountStateResultData, void>({
      query: () => ({ url: "/account/state" }),
      providesTags: ["account"],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAccountStateQuery } = accountApi;

export interface AccountStateResultData {
  points?: number;
  balance?: {
    accountBalance?: number;
    paymentsBalance?: number;
  };
  tax?: {
    balance?: number;
    commitment?: number;
  };
}
