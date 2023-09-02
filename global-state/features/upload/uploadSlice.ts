import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@global-state/store";

type InitialStateProps = {
  imageUrl: string;
  previewSource: string | ArrayBuffer | null;
  selectedFile: File | null;
  message: string;
  error: Error & { success: boolean; isError: boolean };
};

export const initialState: InitialStateProps = {
  imageUrl: "",
  previewSource: "",
  selectedFile: null,
  message: "",
  error: { name: "", message: "", success: false, isError: false },
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setImageUrl: (state, { payload }: PayloadAction<string>) => {
      state.imageUrl = payload;
    },
    setPreviewSource: (
      state,
      { payload }: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.previewSource = payload;
    },
    setSelectedFile: (state, { payload }: PayloadAction<File>) => {
      state.selectedFile = payload;
    },
    clearState: () => initialState,
    setMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    setError: (
      state,
      { payload }: PayloadAction<Error & { success: boolean; isError: boolean }>
    ) => {
      state.error = payload;
    },
  },
});

export const {
  setImageUrl,
  setPreviewSource,
  setMessage,
  setSelectedFile,
  setError,
  clearState,
} = uploadSlice.actions;
export const uploadSelector = (state: RootState) => state.upload;
export default uploadSlice.reducer;
