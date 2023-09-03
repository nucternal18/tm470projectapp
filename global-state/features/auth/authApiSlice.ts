import * as SecureStore from "expo-secure-store";
import { authApiSlice, feedApiSlice } from "@global-state/api";
import * as z from "zod";
import { usersSlice } from "../user/userApiSlice";
import {
  setAuthState,
  resetAuthState,
  setError,
  setLoadingState,
} from "./authSlice";
import { resetUserState } from "../user/userSlice";

const authSchema = z.object({
  email: z.string().email().nonempty({ message: "Email is required" }),
  oneTimeCode: z.string().nonempty().optional(),
  isMobile: z.boolean().optional(),
  organisation: z.string().nonempty().optional(),
  postalCode: z.string().nonempty().optional(),
  name: z.string().nonempty().optional(),
});

export const partialAuthSchema = authSchema.partial();

export type AuthSchemaType = z.infer<typeof authSchema>;
export type PartialAuthSchemaProps = z.infer<typeof partialAuthSchema>;


export const authApi = authApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { status: string; message: string; },
      PartialAuthSchemaProps
    >({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Auth"],
    }),
    authenticate: builder.mutation<
      { status: string, token: string; refreshToken: string },
      PartialAuthSchemaProps
    >({
      query: (data) => ({
        url: "/auth/authenticate",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          dispatch(setLoadingState(true));
          const { data } = await queryFulfilled;
          if (data) {
            await SecureStore.setItemAsync("app_authtoken", data.token);
            await SecureStore.setItemAsync(
              "app_refreshtoken",
              data.refreshToken
            );
            dispatch(
              setAuthState({ token: data.token, isAuthenticated: true })
            );
          }
        } catch (error: any) {
          dispatch(setLoadingState(false));
          if (error?.response?.status === 401) {
            await SecureStore.deleteItemAsync("app_authtoken");
            dispatch(setError(error));
          }
          console.log(error);
        }
      },
    }),
    register: builder.mutation<
      { accessToken: string; refreshToken: string; isNewlyRegistered: boolean },
      PartialAuthSchemaProps
    >({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        dispatch(setLoadingState(true));
        try {
          const { data } = await queryFulfilled;
          if (data) {
            await SecureStore.setItemAsync("app_authtoken", data.accessToken);
            dispatch(
              setAuthState({ token: data.accessToken, isNewlyRegistered: true })
            );
          }
        } catch (error: any) {
          await SecureStore.deleteItemAsync("app_authtoken");
          dispatch(setError(error));
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      async onQueryStarted(_args: any, { dispatch, queryFulfilled }: any) {
        dispatch(resetAuthState());
        dispatch(resetUserState());
        dispatch(authApiSlice.util.resetApiState());
        dispatch(feedApiSlice.util.resetApiState());
        dispatch(usersSlice.util.resetApiState());
        await SecureStore.deleteItemAsync("app_authtoken");
      },
      invalidatesTags: ["Auth"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useAuthenticateMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApi;
