import { baseStoreApi } from "../store/storeApi";

const businessApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessMetrics: builder.query<BusinessMetricsResultData, void>({
      query: () => ({ url: "/business" }),
      providesTags: ["business"],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const { useGetBusinessMetricsQuery } = businessApi;

interface BusinessMetricsResultData {
  last7?: number;
  ytd?: number;
  activeCustomers?: number;
  storeVisits?: number;
}
