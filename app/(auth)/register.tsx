import React from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Control, FieldValues } from "react-hook-form";
import {
  Entypo,
  Octicons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// controller hooks
import useRegisterController from "@hooks/useRegisterController";

// constants
import { COLORS, FONTS, SIZES } from "@constants/theme";
import { TEXT_SECONDARY } from "@constants/theme";

// components
import CustomButton from "@components/CustomButton";
import TextButton from "@components/TextButton";
import CustomInput from "@components/CustomInput";

export default function Register() {
  const {
    form,
    onRegisterPressed,
    onLoginPress,
    onTermsOfUsePressed,
    onPrivacyPressed,
    isLoading,
  } = useRegisterController();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text
              style={{
                color: COLORS.primary,
                alignSelf: "center",
                ...FONTS.h1,
                marginBottom: SIZES.radius,
              }}
            >
              Let's Get Started
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                alignSelf: "center",
                ...FONTS.h3,
              }}
            >
              Create a New Account
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                marginTop: SIZES.padding,
                paddingBottom: SIZES.padding * 2,
              }}
            >
              {/* Organisation */}
              <CustomInput
                label="Organisation"
                placeholder="Organisation"
                control={form.control as unknown as Control<FieldValues>}
                name="organisation"
                prependComponent={
                  <Octicons
                    name="organization"
                    size={24}
                    color={COLORS.grey}
                    style={{
                      alignSelf: "center",
                      marginRight: SIZES.base,
                    }}
                  />
                }
                rules={{
                  required: "Organisation is required",
                  minLength: {
                    value: 2,
                    message:
                      "Please enter an organisation name with at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z -]+$/,
                    message: "Please enter a valid organisation name",
                  },
                }}
                inputContainerStyle={{
                  backgroundColor: COLORS.background,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                  marginBottom: SIZES.radius,
                }}
                props={{}}
              />
              {/* Name */}
              <CustomInput
                label="Name"
                placeholder="Your Full Name"
                control={form.control as unknown as Control<FieldValues>}
                name="name"
                prependComponent={
                  <Ionicons
                    name="person"
                    size={24}
                    color={COLORS.grey}
                    style={{ marginRight: SIZES.base, alignSelf: "center" }}
                  />
                }
                rules={{
                  required: "A full name is required",
                  minLength: {
                    value: 2,
                    message: "Please enter a name with at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z -]+$/,
                    message: "Please enter a valid name",
                  },
                }}
                inputContainerStyle={{
                  backgroundColor: COLORS.background,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                  marginBottom: SIZES.radius,
                }}
                props={{}}
              />

              {/* Email */}
              <CustomInput
                placeholder="Email"
                label="Email"
                name="email"
                control={form.control as unknown as Control<FieldValues>}
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
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                props={{
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                }}
                inputContainerStyle={{
                  backgroundColor: COLORS.background,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                  marginBottom: SIZES.radius,
                }}
              />

              {/* Postal Code */}
              <CustomInput
                placeholder="Your Post Code"
                label="Postal Code"
                name="postCode"
                control={form.control as unknown as Control<FieldValues>}
                prependComponent={
                  <Entypo
                    name="address"
                    size={24}
                    color={COLORS.grey}
                    style={{
                      marginRight: SIZES.base,
                      alignSelf: "center",
                    }}
                  />
                }
                props={{}}
                rules={{
                  required: "Postal Code is required",
                  pattern: {
                    value: /^[A-Za-z]{1,2}[0-9]{1,2} ?[0-9][A-Za-z]{2}$/i,
                    message: "Please enter a valid post code",
                  },
                }}
                inputContainerStyle={{
                  backgroundColor: COLORS.background,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                }}
              />
            </KeyboardAwareScrollView>
            {/* *****End***** */}
            <CustomButton
              text="Register"
              onPress={form.handleSubmit(onRegisterPressed)}
              isLoading={isLoading}
              buttonType={{
                backgroundColor: COLORS.dark,
                width: "100%",
                padding: SIZES.padding / 2,
                alignItems: "center",
                justifyContent: "center",
              }}
              prependComponent={
                <ActivityIndicator style={{ marginRight: 5 }} />
              }
            />

            {/* Terms and Conditions */}
            <View style={styles.termsContainer}>
              <Text style={styles.text}>
                By registering, you confirm that you accept our{" "}
                <TextButton
                  label="Terms of Use"
                  labelStyle={styles.link}
                  onPress={onTermsOfUsePressed}
                />
                and
                <TextButton
                  label="Privacy Policy"
                  labelStyle={styles.link}
                  onPress={onPrivacyPressed}
                />
              </Text>
            </View>

            <TextButton
              contentContainerStyle={{
                height: 50,
                marginTop: SIZES.radius,
              }}
              label="Already registered? Login"
              labelStyle={{
                color: COLORS.primary,
                fontSize: 18,
              }}
              onPress={onLoginPress}
              testId="signUpButton"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  formContainer: {
    flex: 1,
    width: SIZES.width,
    zIndex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    height: SIZES.height,
    paddingTop: SIZES.padding * 2,
  },
  inner: {
    padding: SIZES.padding,
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontSize: SIZES.h3,
    lineHeight: 28,
    textAlign: "center",
  },
  link: {
    color: "#FDB075",
    marginHorizontal: SIZES.radius / 2,
  },
  termsContainer: {
    alignItems: "center",
    marginVertical: SIZES.radius / 2,
  },
});
