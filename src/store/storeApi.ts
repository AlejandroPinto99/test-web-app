import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { authServer } from "../api/authServer";
import { API_URL } from "../api/config";
import { CacheTagsEnum } from "../enums/cache-tags-enum";

const axiosBaseQuery = () => async (requestOpts: AxiosRequestConfig) => {
  try {
    const result = await authServer({
      baseURL: API_URL,
      headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXZWxsIiwic3ViIjoiZXJhbkBjYXJ0eXMuaW8iLCJpYXQiOjE2NDg0OTE4NTQxNzAsImV4cCI6MTY0OTM1NTg1NDE3MH0.GBOtnPKzb7LXpFCfAqyVZRq5j6mDJ46ODDblCJyFKqQ'},
      ...requestOpts,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};

export const axiosBaseQueryFn = axiosBaseQuery();

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseStoreApi = createApi({
  reducerPath: "storeApi",
  tagTypes: [
    CacheTagsEnum.Transaction,
    CacheTagsEnum.FinancialAccount,
    CacheTagsEnum.Card,
    CacheTagsEnum.Payment,
    CacheTagsEnum.Customer,
    CacheTagsEnum.Invoice,
    CacheTagsEnum.Schedule,
    CacheTagsEnum.ScheduleProject,
    CacheTagsEnum.Account,
    CacheTagsEnum.Service,
    CacheTagsEnum.Event,
    CacheTagsEnum.Tax,
    CacheTagsEnum.Whoami,
    CacheTagsEnum.Business,
    CacheTagsEnum.FinancialAccount,
    CacheTagsEnum.Subscription,
    CacheTagsEnum.Charge,
    CacheTagsEnum.CustomerCharges,
    CacheTagsEnum.CustomerInvoices,
  ],
  baseQuery: axiosBaseQueryFn,
  endpoints: () => ({}),
});
