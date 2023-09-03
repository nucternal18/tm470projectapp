import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from "react-native";
import { Control, FieldValues } from "react-hook-form";

// controller hooks
import useLoginController from "@hooks/useLoginController";

// constants
import { images } from "@constants/images";
import { COLORS, FONTS, SIZES } from "@constants/theme";

// components
import CustomButton from "@components/CustomButton";
import TextButton from "@components/TextButton";
import CustomInput from "@components/CustomInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login() {
  const { form, onLoginPressed, onRegisterPress, isLoading } =
    useLoginController();

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
                label="Email"
                placeholder="Enter your email"
                control={form.control as unknown as Control<FieldValues>}
                name="email"
                keyboardType="email-address"
                prependComponent={
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color={COLORS.grey}
                    style={{ marginRight: SIZES.base, alignSelf: "center" }}
                  />
                }
                rules={{
                  required: "Username is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
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
                onPress={form.handleSubmit(onLoginPressed)}
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
              <View
                style={{
                  marginVertical: SIZES.radius / 2,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.light,
                    textAlign: "center",
                  }}
                >
                  We will send a one time code to your email address.
                </Text>
              </View>

              <TextButton
                label="Don't have an account? Register"
                onPress={onRegisterPress}
                labelStyle={{
                  color: COLORS.primaryLight100,
                  fontSize: 18,
                }}
                contentContainerStyle={{
                  height: 50,
                  marginTop: SIZES.radius,
                }}
                testId="registerButton"
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
