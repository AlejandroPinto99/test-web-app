import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { authServer } from "../api/authServer";
import { CacheTagsEnum } from "../enums/cache-tags-enum";

const API_URL = process.env.API_URL;

const axiosBaseQuery = () => async (requestOpts: AxiosRequestConfig) => {
  try {
    const result = await authServer({
      baseURL: API_URL,
      //This is just for testing in development
      headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXZWxsIiwic3ViIjoiZXJhbkBjYXJ0eXMuaW8iLCJpYXQiOjE2NTE1OTYwMjQ3ODEsImV4cCI6MTY1MjQ2MDAyNDc4MX0.aF_4AqO5d6hpnVc3V8V5wv1r9RokpHgn64rFefPw-gQ'}, 
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
