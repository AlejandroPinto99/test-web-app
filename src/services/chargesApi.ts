import { CacheTagsEnum } from "../enums/cache-tags-enum";
import { mapProvidedTag } from "../helpers/rtkQueryHelper";
import { baseStoreApi } from "../store/storeApi";
import { PaymentResultData } from "./paymentsApi";

const chargeApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharges: builder.query<PaymentResultData[], ChargeParamData | undefined>(
      {
        query: (arg) => {
          const params = {
            lastChargeId: arg?.lastChargeId,
          };
          return { url: `/charge`, params };
        },
        providesTags: (result, error, arg) => {
          return mapProvidedTag<PaymentResultData>(
            result ?? [],
            CacheTagsEnum.Charge,
            "id"
          );
        },
        transformResponse: (response) => response.result,
      }
    ),
    getChargesByCustomerId: builder.query<
      PaymentResultData[],
      ChargeByCustomerRestData
    >({
      query: (arg) => {
        const params = {
          lastChargeId: arg?.lastChargeId,
        };
        return { url: `/charge/${arg.customerId}`, params };
      },
      providesTags: (response, error, arg) => [
        { type: CacheTagsEnum.Customer, id: arg.customerStripeId },
      ],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const { useGetChargesQuery, useGetChargesByCustomerIdQuery } = chargeApi;

interface ChargeByCustomerRestData {
  customerId: string;
  customerStripeId?: string;
  lastChargeId?: string;
}

interface ChargeParamData {
  lastChargeId?: string;
}
