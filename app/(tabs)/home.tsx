import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function home() {
  const {colors} = useTheme()
  return (
    <View style={{...styles.container,backgroundColor:colors.surface}}>
      <Text> home </Text>
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
