import { baseStoreApi } from "../store/storeApi";

const settingsApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    setZoomLink: builder.mutation<void, ZoomLinkRestData>({
      query: ({ zoomLink }) => ({
        url: "/setting/zoom",
        method: "POST",
        data: { zoomLink },
      }),
      invalidatesTags: ["whoami"],
      transformResponse: (response) => response.result,
    }),
  }),
  overrideExisting: false,
});

export const { useSetZoomLinkMutation } = settingsApi;

interface ZoomLinkRestData {
  zoomLink: string;
}
