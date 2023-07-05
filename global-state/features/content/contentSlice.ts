import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "src/app/store";
import {
  CountyDataProps,
  DistrictDataProps,
  ContentTypes,
  ContentState,
} from "@types";

export const initialState: ContentState = {
  message: "",
  welcome: null,
  news: null,
  lep: null,
  county: null,
  district: null,
  isLoading: false,
  type: null,
  content: null,
  error: { name: "", message: "", success: false, isError: false },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setCounty: (state, action: PayloadAction<CountyDataProps | null>) => {
      state.county = action.payload;
    },
    setDistrict: (state, action: PayloadAction<DistrictDataProps | null>) => {
      state.district = action.payload;
    },
    setContent: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        content: string;
        type?: string;
        screen?: string;
        countyId?: string;
        isFavorite?: boolean;
        favContentId?: string;
      } | null>
    ) => {
      state.content = action.payload;
    },
    setType: (state, action: PayloadAction<ContentTypes | null>) => {
      state.type = action.payload;
    },
    resetContentState: (state) => {
      state.message = "";
      state.welcome = null;
      state.news = null;
      state.lep = null;
      state.county = null;
      state.district = null;
      state.isLoading = false;
      state.error = { name: "", message: "", success: false, isError: false };
    },
  },
});

export const {
  setCounty,
  setDistrict,
  resetContentState,
  setContent,
  setType,
} = contentSlice.actions;
export const contentSelector = (state: RootState) => state.content;

export default contentSlice.reducer;
