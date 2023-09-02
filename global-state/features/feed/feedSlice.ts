import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@global-state/store";
import {
 
  FeedState,
} from "@types";
import { FeedSchemaProps } from "Models/Feed";

export const initialState: FeedState = {
  feed: null,
  isLoading: false,
  error: { name: "", message: "", success: false, isError: false },
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeed: (state, action: PayloadAction<FeedSchemaProps | null>) => {
      state.feed = action.payload;
    },
    resetFeedState: (state) => {
      state.feed = null;
      state.isLoading = false;
      state.error = { name: "", message: "", success: false, isError: false };
    },
  },
});

export const {
  resetFeedState,
  setFeed,
} = feedSlice.actions;
export const feedSelector = (state: RootState) => state.feed;

export default feedSlice.reducer;
