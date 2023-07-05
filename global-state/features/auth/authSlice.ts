import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import { RootState } from "@global-state/store";
import { AuthState } from "types";

const getToken = async () => {
  const token = await SecureStore.getItemAsync("app_authtoken");
  return token as string;
};

const token = getToken();

export const initialState: AuthState = {
  message: "",
  token: null,
  isLoading: false,
  isAuthenticated: false,
  isNewlyRegistered: false,
  error: { name: "", message: "", success: false, isError: false },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthState: (
      state,
      {
        payload,
      }: PayloadAction<{
        token?: string | null;
        isAuthenticated?: boolean;
        isNewlyRegistered?: boolean;
      }>
    ) => {
      state.isAuthenticated = payload.isAuthenticated as boolean;
      state.isNewlyRegistered = payload.isNewlyRegistered as boolean;
      state.token = payload.token as string | null;
      state.isLoading = false;
    },
    resetAuthState: (state) => {
      state.message = "";
      state.token = null;
      state.isAuthenticated = false;
      state.isNewlyRegistered = false;
      state.isLoading = false;
      state.error = { name: "", message: "", success: false, isError: false };
    },
    setError: (
      state,
      { payload }: PayloadAction<{ success: boolean; isError: boolean } & Error>
    ) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { setAuthState, resetAuthState, setError, setLoadingState } =
  authSlice.actions;

export const authSelector = (state: RootState) => state.auth;
export const selectAuthToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
