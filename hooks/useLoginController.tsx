import {  useCallback } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "expo-router";

// state (Model)
import { useLoginMutation } from "@global-state/features/auth/authApiSlice";
import {
  isFetchBaseQueryError,
  isErrorWithMessage,
} from "@global-state/helper";

// zod schemas
import { partialUserSchema, PartialUserSchemaProps } from "@models/User";

export default function useLoginController() {
    const router = useRouter();

    // function defined in the state (Model) to handle the login API call
    const [
      login,
      { isLoading, isError, error: loginError },
    ] = useLoginMutation();

    // useForm hook from react-hook-form 
    // to handle the form state and validation
    const form = useForm<PartialUserSchemaProps>({
      resolver: zodResolver(partialUserSchema),
    });

    // useCallback hook to memoize the function and prevent unnecessary re-renders
    // and handle the logic for submitting the form
    const onLoginPressed = useCallback(
      async (data: PartialUserSchemaProps) => {
        const newData = { email: data.email, token: "" };

        try {
          // Request one time code
          const response = await login(newData).unwrap();

          if (response.status === "success") {
            form.reset();
            router.replace(`/verification?email=${data.email}`);
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

    // function to handle the navigation to the register screen
    const onRegisterPress = () => {
      router.push("/register");
    };

    return {
        form,
        onLoginPressed,
        onRegisterPress,
        isLoading,
        isError,
        loginError,
    }
}
