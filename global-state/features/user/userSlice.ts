import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {  RootState } from "@global-state/store";
import {  UserState } from "types";
import { PartialUserSchemaWithIdProps } from "@models/User";

// const getCurrentUser = async () => {
//     const user = await SecureStore.getItemAsync("app_user");
//     return user as CurrentUser;
// }
// const currentUser = getCurrentUser();

export const initialState: UserState = {
  currentUser: null,
  message: "",
  error: { name: "", message: "", success: false, isError: false },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (
      state,
      {
        payload: { currentUser },
      }: PayloadAction<{ currentUser: Partial<PartialUserSchemaWithIdProps> }>
    ) => {
      state.currentUser = currentUser;
    },
    resetUserState: (state) => {
      state.currentUser = null;
      state.message = "";
      state.error = { name: "", message: "", success: false, isError: false };
    },
    setError: (state, { payload }: PayloadAction<Error & { success: boolean; isError: boolean} >) => {
      state.error = payload;
    },
  },
});

export const { setUserState, resetUserState, setError } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
