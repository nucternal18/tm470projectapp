import { useCallback, useLayoutEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRootNavigation } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { RootSiblingParent } from "react-native-root-siblings";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// state (Model)
import { store } from "@global-state/store";

// hooks (Controller)
import useAuthController from "@hooks/useAuthController";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      {loaded && (
        <Provider store={store()}>
          <PersistGate loading={null} persistor={persistStore(store())}>
            <RootLayoutNav />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const rootNavigation = useRootNavigation();
  const [isNavigationReady, setIsNavigationReady] = useState<boolean>(false);

  // Check if the navigation has loaded and is ready.
  useLayoutEffect(() => {
    const unsubscribe = rootNavigation?.addListener("state", () => {
      setIsNavigationReady(true);
    });
    return function cleanup() {
      if (unsubscribe) unsubscribe();
    };
  }, [rootNavigation]);

  const { user } = useAuthController(isNavigationReady);


  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <RootSiblingParent>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="(auth)"
          >
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="help" options={{ presentation: "modal" }} />
          </Stack>
        </RootSiblingParent>
      </ThemeProvider>
    </>
  );
}
