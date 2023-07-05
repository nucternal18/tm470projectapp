import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";

import {
  authApiSlice,
  messagesApiSlice,
  contentApiSlice,
  uploadApiSlice,
  userApiSlice,
} from "./api";
import authReducer from "@features/auth/authSlice";
import userReducer from "@features/user/userSlice";
import contentReducer from "@features/content/contentSlice";


// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   whitelist: ["userApi"],
//   blacklist: ["authApi"],
// };

const reducers = {
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [messagesApiSlice.reducerPath]: messagesApiSlice.reducer,
  [contentApiSlice.reducerPath]: contentApiSlice.reducer,
  [uploadApiSlice.reducerPath]: uploadApiSlice.reducer,
  auth: authReducer,
  user: userReducer,
  content: contentReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApiSlice.middleware,
      messagesApiSlice.middleware,
      contentApiSlice.middleware,
      uploadApiSlice.middleware,
      userApiSlice.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

const makeStore = () => store;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
