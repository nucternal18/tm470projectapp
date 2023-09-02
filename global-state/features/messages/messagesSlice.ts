import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@global-state/store";
import { PartialMessagesSchemaProps } from "@models/Messages";

export interface MessagesState {
    message: PartialMessagesSchemaProps | null;
    messages: PartialMessagesSchemaProps[] | null;
    isLoading: boolean;
    error: {
        name: string;
        message: string;
        success: boolean;
        isError: boolean;
    } | Error;
}

export const initialState: MessagesState = {
    message: null,
    messages: null,
    isLoading: false,
    error: { name: "", message: "", success: false, isError: false },
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<PartialMessagesSchemaProps | null>) => {
            state.message = action.payload;
        },
        setMessages: (state, action: PayloadAction<PartialMessagesSchemaProps[] | null>) => {
            state.messages = action.payload;
        },
        resetMessagesState: (state) => {
            state.message = null;
            state.messages = null;
            state.isLoading = false;
            state.error = { name: "", message: "", success: false, isError: false };
        },
    },
});

export const { setMessage, setMessages, resetMessagesState } = messagesSlice.actions;

export const messagesSelector = (state: RootState) => state.messages;

export default messagesSlice.reducer;