import * as SecureStore from "expo-secure-store";
import { authApiSlice, contentApiSlice } from "@global-state/api";
import { IFormData } from "../../../types";
import { usersSlice } from "../user/userApiSlice";
import {
  setAuthState,
  resetAuthState,
  setError,
  setLoadingState,
} from "./authSlice";
import { resetUserState } from "../user/userSlice";

export const authApi = authApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; refreshToken: string }, IFormData>(
      {
        query: (data) => ({
          url: "auth/login",
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
      }
    ),
    register: builder.mutation<
      { accessToken: string; refreshToken: string; isNewlyRegistered: boolean },
      IFormData
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
    requestPasswordReset: builder.mutation<
      { success: boolean; message: string },
      { email: string }
    >({
      query: ({ email }: { email: string }) => ({
        url: "auth/request-reset",
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation<
      { success: boolean; message: string },
      { token: string; password: string }
    >({
      query: ({ token, password }: { token: string; password: string }) => ({
        url: "auth/reset",
        method: "POST",
        body: { token, password },
      }),
      invalidatesTags: ["Auth"],
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
        dispatch(contentApiSlice.util.resetApiState());
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
  useRegisterMutation,
  useLogoutMutation,
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
} = authApi;
