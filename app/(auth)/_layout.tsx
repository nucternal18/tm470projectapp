import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "welcome",
};

export default function ProfileLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="welcome">
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
          headerRight: () => (
            <Link href="/new-message" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="register" options={{ headerShown: true }} />
    </Stack>
  );
}
