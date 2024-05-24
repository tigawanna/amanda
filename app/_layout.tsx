import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
} from "react-native-paper";
import { useThemeStore } from "@/store/theme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <PaperProvider
        theme={theme === "light" ? CombinedDefaultTheme : CombinedDarkTheme}
        settings={{
          rippleEffectEnabled: true,
        }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
