import React, { useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "expo-router";

// state (Model)
import {
  AuthSchemaType,
  useAuthenticateMutation,
} from "@global-state/features/auth/authApiSlice";
import {
  isFetchBaseQueryError,
  isErrorWithMessage,
} from "@global-state/helper";


const authenticateFormSchema = z.object({
  oneTimeCode: z.string().nonempty({
    message: "Please enter your email",
  }),
});

export type authenticateFormSchemaType = z.infer<typeof authenticateFormSchema>;

export default function useVerificationController(email: string) {
     const router = useRouter();
     const [authenticate, { isLoading, isError }] = useAuthenticateMutation();


     const form = useForm<authenticateFormSchemaType>({
       resolver: zodResolver(authenticateFormSchema),
     });

     const onAuthenticatePressed = useCallback(
       async (data: authenticateFormSchemaType) => {
         // recaptcha?.current?.open();
         const newData = {
           email: email as string,
           oneTimeCode: data.oneTimeCode,
           isMobile: true,
         } satisfies AuthSchemaType;
         try {
           // validate user
           await authenticate(newData).unwrap();
           form.reset();
           router.push("/(tabs)/feed");
         } catch (error: any) {
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

        return { form, onAuthenticatePressed, isLoading, isError };
}
