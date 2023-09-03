import { useState, useCallback } from "react";
import { Linking } from "react-native";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";

// state (Model)
import { useRegisterMutation } from "@global-state/features/auth/authApiSlice";
import { useAppDispatch } from "@global-state/hooks";
import { setAuthState } from "@global-state/features/auth/authSlice";
import {
  isFetchBaseQueryError,
  isErrorWithMessage,
} from "@global-state/helper";

// zod schemas
import { partialUserSchema, PartialUserSchemaProps } from "@models/User";

const TERMS_OF_USE_URL = "https://steppingstonesapp.com/terms-of-use";
const PRIVACY_POLICY_URL = "https://steppingstonesapp.com/privacy-policy";

export default function useRegisterController() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [register, { isLoading }] = useRegisterMutation();

  const form = useForm<PartialUserSchemaProps>({
    resolver: zodResolver(partialUserSchema),
  });

  const onRegisterPressed = useCallback(
    async (data: PartialUserSchemaProps) => {
      const newData = {
        email: data.email,
        name: data.name,
        organisation: data.organisation,
        postCode: data.postCode,
        acceptTermsAndConditions: true,
      };
      try {
        const response = await register(newData).unwrap();

        if (response?.isNewlyRegistered) {
          Toast.show("Registration successful", {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "green",
          });
          dispatch(
            setAuthState({
              isNewlyRegistered: response?.isNewlyRegistered,
              isAuthenticated: false,
            })
          );
          form.reset();
          router.push("/login");
        }
      } catch (error) {
        if (isFetchBaseQueryError(error)) {
          // you can access all properties of `FetchBaseQueryError` here
          const errMsg =
            "error" in error ? error.error : JSON.stringify(error.message);
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
    },
    []
  );

  const onLoginPress = () => {
    router.push("/login");
  };

  const onTermsOfUsePressed = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(TERMS_OF_USE_URL);

    if (supported) {
      await Linking.openURL(TERMS_OF_USE_URL);
    } else {
      return;
    }
  }, [TERMS_OF_USE_URL]);

  const onPrivacyPressed = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(PRIVACY_POLICY_URL);

    if (supported) {
      await Linking.openURL(PRIVACY_POLICY_URL);
    } else {
      return;
    }
  }, [PRIVACY_POLICY_URL]);

  return {
    form,
    onRegisterPressed,
    onLoginPress,
    onTermsOfUsePressed,
    onPrivacyPressed,
    isVisible,
    setIsVisible,
    isLoading,
  };
}
