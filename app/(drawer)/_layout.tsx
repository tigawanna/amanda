import { Drawer } from "expo-router/drawer";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

export default function DrawerLayout() {
  const { colors } = useTheme();
  return (
    <Drawer
      screenOptions={{
        headerShown: true,

        headerTitle(props) {
          return <Text>{props.children}</Text>;
        },

        headerStyle: {
          backgroundColor: colors.elevation.level5,
        },
        drawerHideStatusBarOnOpen: true,
        // drawerIcon(props) {
        //   return <Ionicons name="home" size={props.size} color={colors.onPrimaryContainer} />;
        // },
        drawerActiveBackgroundColor: colors.elevation.level5,
        drawerStyle: {
          backgroundColor: colors.elevation.level1,
        },
        drawerActiveTintColor: colors.elevation.level1,
        drawerLabelStyle: { marginLeft: -10, color: colors.onPrimaryContainer },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: "Home",
          drawerLabelStyle: { marginLeft: -10, color: colors.onPrimaryContainer },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={colors.primary} />
          ),
        }}
      />

      <Drawer.Screen
        name="menu" // This is the name of the page and must match the url from root
        options={{
          title: "Menu",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings" // This is the name of the page and must match the url from root
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={colors.primary} />
          ),
        }}
      />
    </Drawer>
  );
}
