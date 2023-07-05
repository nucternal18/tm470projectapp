import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {  RootState } from "@global-state/store";
import { CurrentUser, UserState } from "types";

// const getCurrentUser = async () => {
//     const user = await SecureStore.getItemAsync("app_user");
//     return user as CurrentUser;
// }
// const currentUser = getCurrentUser();

export const initialState: UserState = {
  currentUser: null,
  message: "",
  error: { name: "", message: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (
      state,
      {
        payload: { currentUser },
      }: PayloadAction<{ currentUser: Partial<CurrentUser> }>
    ) => {
      state.currentUser = currentUser;
    },
    resetUserState: (state) => {
      state.currentUser = null;
      state.message = "";
      state.error = { name: "", message: "" };
    },
    setError: (state, { payload }: PayloadAction<Error>) => {
      state.error = payload;
    },
  },
});

export const { setUserState, resetUserState, setError } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
