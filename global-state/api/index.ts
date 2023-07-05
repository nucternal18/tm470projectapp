import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";
import { setAuthState, resetAuthState } from "@features/auth/authSlice";
import { resetUserState } from "@features/user/userSlice";
import { isTokenExpired } from "@utils/isTokenExpired";
import Toast from "react-native-root-toast";

const API_URL = "http://localhost:5001/api/v1/";
// const API_URL = "https://steppingstonesapp.com/api/v1/";

interface RefreshResult {
  error?: FetchBaseQueryError | undefined;
  data?:
    | {
        token: string;
      }
    | undefined;
  meta?: FetchBaseQueryMeta | undefined;
}

function checkIsError(obj: unknown): obj is Error {
  return (
    typeof obj === "object" && obj !== null && "data" in obj && "status" in obj
  );
}

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: async (headers, api) => {
    const token = await SecureStore.getItemAsync("app_authtoken");
    if (token && !isTokenExpired(token)) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set(
      "User-Agent",
      "SteppingStonesApp/1.0.0 (com.steppingstonesapp.steppingstonesapp; build:1; iOS 14.4.0)"
    );
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn = async (
  args: string | FetchArgs,
  api,
  extraOptions
) => {
  // send refresh token to get new token
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401 || result?.error?.status === 403) {
    const refreshToken = await SecureStore.getItemAsync("app_refreshtoken");
    const refreshResult: RefreshResult = await baseQuery(
      { url: "refresh", method: "GET", body: { refreshToken } },
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      // store new token
      await SecureStore.setItemAsync(
        "app_authtoken",
        JSON.stringify(refreshResult.data.token)
      );
      // store current user
      api.dispatch(
        setAuthState({
          token: JSON.stringify(refreshResult.data.token),
          isAuthenticated: true,
        })
      );
      // retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        if (checkIsError(refreshResult?.error?.data)) {
          refreshResult.error.data.message =
            "You Session has expired. Please login again. ";
          Toast.show(refreshResult.error.data.message, {
            duration: Toast.durations.LONG,
          });
        }
        await SecureStore.deleteItemAsync("app_authtoken");
        api.dispatch(resetAuthState());
        api.dispatch(resetUserState());
      }
    }
  }
  return result;
};

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({}),
});

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReAuth,
  keepUnusedDataFor: 960,
  tagTypes: ["User", "Favorite"],

  endpoints: (builder) => ({}),
});


export const contentApiSlice = createApi({
  reducerPath: "editorApi",
  baseQuery: baseQueryWithReAuth,
  keepUnusedDataFor: 300,
  tagTypes: ["Content"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
});

export const messagesApiSlice = createApi({
  reducerPath: "messagesApi",
  baseQuery: baseQueryWithReAuth,
  keepUnusedDataFor: 300,
  tagTypes: ["Messages"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
});

export const uploadApiSlice = createApi({
  reducerPath: "uploadApi",
  baseQuery: baseQueryWithReAuth,
  keepUnusedDataFor: 300,
  tagTypes: ["Upload"],
  endpoints: (builder) => ({}),
});
