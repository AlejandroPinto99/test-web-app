import { authServer } from "../api/authServer";
import server from "../api/sever";

import { baseStoreApi } from "../store/storeApi";
import { AxiosError } from "axios";

export const authApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResultData, LoginRestData>({
      async queryFn(_arg, _queryApi, _extraOptions) {
        try {
          const dataRest = {
            ..._arg,
            email: _arg.email.trim().toLowerCase(),
          };
          const res = await server.post("/auth/login?source=app", dataRest);

          authServer.defaults.headers.common["Authorization"] =
            res.data.result.jwt;

          const account = await authServer.get("/account");
          const accountData = account.data;
          if (accountData.msg === "disabled") {
            return {
              data: {
                user: { ...res.data.result },
                account: account.data.result,
              },
            };
          }

          let tax = {};
          const aboundId = res.data.result.user.tax.aboundId;
          if (!aboundId) {
            try {
              const res = await authServer.post("/tax/user");

              tax = res.data;
            } catch (error) {}
          }

          const userAuth = { ...res.data.result, aboundId };

          return {
            data: {
              user: userAuth,
              account: account.data.result,
              tax: tax,
            },
          };
        } catch (error) {
          const err = error as AxiosError;
          console.log("ERROR login", error);
          return {
            error: { status: err.response?.status, data: err.response?.data },
          };
        }
      },
    }),
    getWhoami: builder.query<WhoamiResultData, void>({
      query: () => ({ url: "/auth/whoami" }),
      providesTags: ["whoami"],
      transformResponse: (response) => {
        const aboundId = response.result.user.tax.aboundId;
        return { ...response.result, aboundId };
      },
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordRestData>({
      query: (data) => ({ url: "/user/forgotpassword", method: "POST", data }),
      transformResponse: (response) => response.result,
    }),
    saveBiometricPublicKey: builder.mutation<any, BiometricsRestData>({
      query: (data) => ({
        url: "/auth/biometrics",
        method: "POST",
        data: { publicKey: data.publicKey },
      }),
      transformResponse: (response) => response.result,
    }),
    deleteBiometricPublicKey: builder.mutation<any, void>({
      query: () => ({ url: `/auth/biometrics`, method: "DELETE" }),
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useGetWhoamiQuery,
  useForgotPasswordMutation,
  useSaveBiometricPublicKeyMutation,
  useDeleteBiometricPublicKeyMutation,
} = authApi;

interface LoginRestData {
  email: string;
  password: string;
}

interface LoginResultData {
  user: WhoamiResultData;
  account: { link: string };
  tax?: TaxResultData;
}

interface ForgotPasswordRestData {
  email: string;
}

interface BiometricsRestData {
  publicKey: string;
}

interface WhoamiResultData {
  jwt?: string;
  user?: {
    createdAt?: Date;
    emailVerified?: boolean;
    stripeAccountId?: string;
    financialAccountId?: string;
    cardholderId?: string;
    cardId?: string;
    nylasToken?: string;
    calendarId?: string;
    calendarEmail?: string;
    identity?: string;
    didStartOnboarding?: boolean;
    cname?: string;
    zoomLink?: string;
    active?: boolean;
    _id?: string;
    name?: string;
    email?: string;
    phone?: string;
    settings?: {
      instantPay?: boolean;
      _id?: string;
      calendarSync?: boolean;
    };
    timekitId?: string;
    tax?: TaxResultData;
    biometricsPublicKey?: string;
    storeUrl?: string;
  };
}

interface TaxResultData {
  active?: boolean;
  aboundId?: string;
  _id?: string;
}
