import {HomeScreen }from "@/components/screens/HomeScreen";
import { View,StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function home() {
  const {colors} = useTheme()
  return (
    <View style={{...styles.container,backgroundColor:colors.surface}}>
   <HomeScreen/>
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
