import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../../constants/Colors";

export default function ProfileLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="user-details" options={{ headerShown: true }} />
      <Stack.Screen name="camera" options={{ headerShown: true }} />
      <Stack.Screen name="favorites" options={{ headerShown: true }} />
      <Stack.Screen name="feedback" options={{ headerShown: true }} />
      <Stack.Screen name="settings" options={{ headerShown: true }} />
    </Stack>
  );
}
