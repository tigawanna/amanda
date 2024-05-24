import Settings from "@/components/screens/Settings";
import { View,StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";


export default function settings() {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.surface }}>
      <Settings />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
