import {  Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../../constants/Colors";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function NotificationsLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Notifications",
        }}
      />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
    </Stack>
  );
}
