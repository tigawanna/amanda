import { useThemeStore } from "@/store/theme";
import { Ionicons } from "@expo/vector-icons";
import { View} from "react-native";
import { Text } from 'react-native-paper';
import { Switch, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Settings() {
  const themeStore = useThemeStore();
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View style={{ padding: 16, width: "100%", backgroundColor: colors.elevation.level2 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              width: "100%",
            }}>
            <View style={{ flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
              <Ionicons
                name={themeStore.theme === "dark" ? "sunny" : "moon"}
                size={28}
                color={colors.primary}
              />
            </View>
            <Text variant="titleLarge">Theme</Text>
            <Switch
              value={themeStore.theme === "dark"}
              onValueChange={() => themeStore.toggle("theme")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
