import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Control, FieldValues } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// constants
import { COLORS, FONTS, SIZES } from "@constants/theme";
import { images } from "@constants/images";

// hooks (Controller)
import useVerificationController from "@hooks/useVerificationController";

// components
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";



export default function verification() {
  const { email } = useLocalSearchParams();

  const { form, onAuthenticatePressed, isLoading } = useVerificationController(
    email as string
  );

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.logoContainer}>
            <View style={styles.overlay}>
              <Image
                source={images.icon}
                style={[styles.logo, { height: SIZES.height * 0.3 }]}
                resizeMode="contain"
              />
              <Text style={styles.title}>Welcome Back</Text>
            </View>
          </View>
          <View style={styles.formContainer} accessible={true}>
            <Text style={styles.formTitle}>Sign In to Continue</Text>
            <View style={styles.formInputs}>
              <CustomInput
                label="One Time Code"
                placeholder="Enter the one time code"
                control={form.control as unknown as Control<FieldValues>}
                name="oneTimeCode"
                keyboardType="numeric"
                prependComponent={
                  <MaterialCommunityIcons
                    name="form-textbox-password"
                    size={24}
                    color="black"
                  />
                }
                rules={{
                  required: "Only numbers required",
                  pattern: {
                    value: /^[0-9]{6}$/i,
                    message: "Invalid digits",
                  },
                }}
                inputContainerStyle={{
                  backgroundColor: COLORS.background,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                  marginBottom: SIZES.radius,
                }}
                props={{
                  autoCapitalize: "none",
                }}
              />
              <CustomButton
                text="Continue"
                onPress={form.handleSubmit(onAuthenticatePressed)}
                isLoading={isLoading}
                buttonType={{
                  backgroundColor: COLORS.dark,
                  width: "100%",
                  padding: SIZES.padding / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: SIZES.radius,
                }}
                testID="signInButton"
                prependComponent={
                  <ActivityIndicator size="small" color={COLORS.light} />
                }
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
      android: {
        paddingTop: 25,
      },
    }),
  },
  logo: {
    width: "60%",
    maxWidth: SIZES.width * 0.5,
    maxHeight: SIZES.width * 0.4,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    ...FONTS.h1,
    color: COLORS.light,
    marginTop: Platform.OS === "ios" ? 20 : 15,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    height: Platform.OS === "ios" ? SIZES.height * 0.6 : SIZES.height * 0.5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  formInputs: {
    flex: 1,
    width: "100%",
    marginVertical: SIZES.padding,
  },
  formTitle: {
    ...FONTS.h2,
    color: COLORS.light,
  },
  formContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2,
    height: Platform.OS === "ios" ? SIZES.height * 0.5 : SIZES.height * 0.6,
    marginTop: -SIZES.height * 0.1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.radius * 2,
  },
});
