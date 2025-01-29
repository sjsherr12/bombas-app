import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PointsProvider } from "@/components/context/PointsContext";

export default function RootLayout() {
  return(
    <PointsProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="notifications" />
          <Stack.Screen name="fill" />
          <Stack.Screen name="showProfile" />
        </Stack>
      </SafeAreaProvider>
    </PointsProvider>
  )
}