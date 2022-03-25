import { baseStoreApi } from "../store/storeApi";

const cardApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => ({ url: "/card" }),
      providesTags: ["card"],
      transformResponse: (response) => response.result,
    }),
    getCard: builder.query<CardResultData, number>({
      query: (id) => ({ url: `/card/${id}` }),
      providesTags: (response, error, arg) => [{ type: "card", id: arg }],
      transformResponse: (response) => response.result,
    }),
    activateCard: builder.mutation<void, ActivateCardRestData>({
      query: (data) => ({ url: "/card/activate", method: "POST", data }),
      invalidatesTags: (response, error, arg) => [
        { type: "card", id: arg.cardId },
      ],
      transformResponse: (response) => response.result,
    }),
    changeCardStatus: builder.mutation<void, ChangeCardStatusRestData>({
      query: (data) => ({ url: "/card", method: "PUT", data }),
      invalidatesTags: (response, error, arg) => [
        { type: "card", id: arg.cardId },
      ],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCardsQuery,
  useGetCardQuery,
  useChangeCardStatusMutation,
  useActivateCardMutation,
} = cardApi;

export enum CardStateEnum {
  Active = "active",
  Inactive = "inactive",
}

interface CardResultData {
  cardholder?: {
    name?: string;
  };
  metadata?: {
    delivered?: boolean;
  };
  shipping?: {
    tracking_url?: string;
    address?: {
      line1?: string;
      state?: string;
      country?: string;
      postal_code?: string;
      city?: string;
    };
  };
  exp_month?: string;
  exp_year?: string;
  last4?: number;
  status?: CardStateEnum;
}

interface ActivateCardRestData {
  last4: number;
  cardId: number;
}

interface ChangeCardStatusRestData {
  cardId: number;
  status: CardStateEnum;
}
