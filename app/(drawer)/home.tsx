import { View,Text,StyleSheet } from 'react-native'
export default function home(){
return (
 <View style={styles.container}>
<Text> home </Text>
 </View>
);
}
const styles = StyleSheet.create({
container:{
  flex:1,
  height:"100%"
}
})
