import { useLayoutEffect } from "react";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
import { useRouter, useSegments } from "expo-router";

// state (Model)
import {
  authSelector,
  setAuthState,
} from "@global-state/features/auth/authSlice";
import { useAppSelector, useAppDispatch } from "@global-state/hooks";
import { useGetUserQuery } from "@global-state/features/user/userApiSlice";
import { setUserState } from "@global-state/features/user/userSlice";

// zod schemas
import { PartialUserSchemaWithIdProps } from "@models/User";

// utils
import { isTokenExpired } from "@utils/isTokenExpired";

export default function useAuthController(isNavigationReady: boolean) {
  const router = useRouter();
  const segments = useSegments();
  const dispatch = useAppDispatch();
  const { isAuthenticated, token } = useAppSelector(authSelector);
  const { data: user } = useGetUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  // Retrieve the authentication token from secure storage on mount
  useLayoutEffect(() => {
    const getAuthToken = async () => {
      if (!isNavigationReady) {
        return;
      }
      try {
        const storedToken = await SecureStore.getItemAsync("app_authtoken");
        if (!(typeof storedToken === "string")) {
          dispatch(setAuthState({ token: null, isAuthenticated: false }));
          await SecureStore.deleteItemAsync("app_authtoken");
          await SecureStore.deleteItemAsync("app_refreshtoken");
        }
        dispatch(setAuthState({ token: storedToken, isAuthenticated: true }));
      } catch (error) {
        await SecureStore.deleteItemAsync("app_authtoken");
        await SecureStore.deleteItemAsync("app_refreshtoken");
        if (error instanceof Error) {
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
        Toast.show("Error! Invalid Token.", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: "red",
        });
      }
    };
    getAuthToken();
  }, [isNavigationReady, dispatch, setAuthState]);

  /**
   * function to check if the user is authenticated
   * and if the token is expired
   * and if the user is in the route group
   * @returns void
   */
  async function checkAuthentication() {
    if (!token) return;
    const inAuthGroup = segments[0] === "(auth)";
    const checkIsTokenExpired = isTokenExpired(token as string);
    dispatch(
      setUserState({ currentUser: user as PartialUserSchemaWithIdProps })
    );
    if (checkIsTokenExpired && !isAuthenticated && !user && !inAuthGroup) {
      dispatch(setAuthState({ token: null, isAuthenticated: false }));
      router.replace("/(auth)");
    } else if (!checkIsTokenExpired && inAuthGroup) {
      router.replace("/(tabs)/feed");
      dispatch(setAuthState({ token: token, isAuthenticated: true }));
    }
  }

  // Check authentication on mount
  useLayoutEffect(() => {
    if (!isNavigationReady) {
      return;
    }
    checkAuthentication().catch((error) => {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "red",
      });
    });
  }, [user, segments, isNavigationReady, token]);

  return {
    user,
  };
}
