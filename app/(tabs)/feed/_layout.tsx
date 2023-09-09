import {  Stack } from "expo-router";

export default function FeedLayout() {
  return (
    <Stack  initialRouteName="index" >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="feed-details" options={{ headerShown: true }} />
      <Stack.Screen name="search" options={{ headerShown: false}} />
    </Stack>
  );
}
