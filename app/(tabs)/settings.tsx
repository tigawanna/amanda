import Settings from "@/components/screens/Settings";
import { View,StyleSheet } from "react-native";

import { Switch, useTheme } from "react-native-paper";
export default function settings() {
  return (
    <View style={styles.container}>
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
