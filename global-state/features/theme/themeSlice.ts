import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {AppDispatch, RootState} from "@global-state/store";

export const getTheme = async (): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem("@theme");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log("Error getting theme", e);
  }
};

export const getIsChecked = async (): Promise<boolean | undefined> => {
  try {
    const value = await AsyncStorage.getItem("@isChecked");

    if (value !== null && value === "true") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("Error getting isChecked", e);
  }
};

interface ThemeState {
  isDark: boolean;
  theme: string;
}

const initialState: ThemeState = {
  isDark: false,
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setGlobalTheme: (state, {payload}: PayloadAction<string>) => {
      state.theme = payload;
    },
    setIsDark: (state, {payload}: PayloadAction<boolean>) => {
      state.isDark = payload;
    },
  },
});

export const {setGlobalTheme, setIsDark} = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;

export default themeSlice.reducer;
