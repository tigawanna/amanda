import { MenuScreen } from "@/components/screens/MenuScreen";
import { View, StyleSheet } from "react-native";

export default function menu() {
  return (
    <View style={styles.container}>

      <MenuScreen />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
