import axios, { AxiosError } from "axios";
import { baseStoreApi } from "../store/storeApi";

const integromatApi = baseStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    inviteFriend: builder.mutation<string, InviteFriendRestData>({
      async queryFn(_arg, _queryApi, _extraOptions) {
        try {
          const url = `https://hook.integromat.com/wjwpoo8thvj77rpmbieqjnxebdvytc1q`;
          const result = await axios.post(url, _arg);

          return { data: result?.data };
        } catch (error) {
          const err = error as AxiosError;
          return {
            error: { status: err.response?.status, data: err.response?.data },
          };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useInviteFriendMutation } = integromatApi;

interface InviteFriendRestData {
  inviterEmail?: string;
  inviteeEmail?: string;
  inviteePhone?: string;
}
