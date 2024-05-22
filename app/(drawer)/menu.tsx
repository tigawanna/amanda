import { useThemeStore } from "@/store/theme";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Switch, useTheme } from "react-native-paper";
export default function menu() {
  const themeStore = useThemeStore();
  const { colors } = useTheme();

  return (
    <View style={{
        backgroundColor: colors.primary,
        height: "100%",
    }}>
      <Switch
        value={themeStore.theme === "dark"}
        onValueChange={() => themeStore.toggle("theme")}
      />
      <Text>{themeStore.theme}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
