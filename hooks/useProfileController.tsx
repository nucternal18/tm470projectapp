import { useCallback } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

// redux
import { useGetUserQuery } from "@global-state/features/user/userApiSlice";
import { useLogoutMutation } from "@features/auth/authApiSlice";
import { useAppDispatch } from "@global-state/hooks";
import {
  setError,
  resetAuthState,
} from "@global-state/features/auth/authSlice";
import { isErrorWithMessage, isFetchBaseQueryError } from "@global-state/helper";
import Toast from "react-native-root-toast";


export default function useProfileController() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { data: user, isLoading } = useGetUserQuery();
    const [logout] = useLogoutMutation();

    const handleLogout = useCallback(async () => {
      const refreshToken = await SecureStore.getItemAsync("app_refreshtoken");
      const data = {
        isMobile: true,
        refreshToken: refreshToken as string,
      };
      try {
        await logout(data);
        await SecureStore.deleteItemAsync("app_authtoken");
        await SecureStore.deleteItemAsync("app_refresh");
        dispatch(resetAuthState());
        router.replace("/(auth)");
      } catch (error) {
        if (isFetchBaseQueryError(error)) {
          // you can access all properties of `FetchBaseQueryError` here
          const errMsg =
            "error" in error ? error.error : JSON.stringify(error.message);
          dispatch(
            setError({
              name: "LOGOUT_ERROR",
              success: false,
              isError: false,
              message: errMsg as string,
            })
          );
          Toast.show(errMsg as string, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "red",
          });
        } else if (isErrorWithMessage(error)) {
          dispatch(
            setError({
              name: "LOGOUT_ERROR",
              success: false,
              isError: false,
              message: error.message,
            })
          );
          // you can access a string 'message' property here
          Toast.show(error.message, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "red",
          });
        }
      }
    }, []);

    return { user, isLoading, handleLogout };
};