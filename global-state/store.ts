import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  authApiSlice,
  messagesApiSlice,
  feedApiSlice,
  uploadApiSlice,
  userApiSlice,
} from "./api";
import authReducer from "@features/auth/authSlice";
import userReducer from "@features/user/userSlice";
import feedReducer from "@global-state/features/feed/feedSlice";
import messagesReducer from "@global-state/features/messages/messagesSlice";
import uploadReducer from "@global-state/features/upload/uploadSlice";
import themeReducer from "@global-state/features/theme/themeSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["userApi"],
  blacklist: ["authApi"],
};

const reducers = {
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [messagesApiSlice.reducerPath]: messagesApiSlice.reducer,
  [feedApiSlice.reducerPath]: feedApiSlice.reducer,
  [uploadApiSlice.reducerPath]: uploadApiSlice.reducer,
  auth: authReducer,
  user: userReducer,
  feed: feedReducer,
  messages: messagesReducer,
  upload: uploadReducer,
  theme: themeReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

// persist the root reducer
const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([
        authApiSlice.middleware,
        messagesApiSlice.middleware,
        feedApiSlice.middleware,
        uploadApiSlice.middleware,
        userApiSlice.middleware,
      ]),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
};

setupListeners(setupStore().dispatch);

export const store = () => setupStore();
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
