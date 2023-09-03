import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import { images } from "@constants/images";
import TextButton from "@components/TextButton";

export default function Welcome() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.titleContainer}>
        <Image
          source={images.icon}
          style={{
            width: 150,
            height: 150,
          }}
        />

        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.primary,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            ...FONTS.h1,
            color: COLORS.primaryDark800,
          }}
        >
          StartupCompanion
        </Text>
        <Text
          style={{
            marginTop: SIZES.base / 2,
            ...FONTS.h3,
            color: COLORS.primary,
            flexWrap: "wrap",
          }}
        >
          Business Support Application
        </Text>
      </View>
      {/* footer */}
      <View
        style={[styles.footerContainer]}
      >
        <TextButton
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius * 2,
            backgroundColor: COLORS.dark,
            width: SIZES.width * 0.8,
          }}
          label="Get Started"
          labelStyle={{ color: COLORS.light, fontSize: 20 }}
          onPress={() => router.push("/register")}
        />

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
          onPress={() => router.push("/login")}
        />
      </View>
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
  titleContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
