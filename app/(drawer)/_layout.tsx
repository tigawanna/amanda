

import { Drawer } from "expo-router/drawer";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
export default function DrawerLayout() {
    const { colors } = useTheme();
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor:colors.primary,
        drawerActiveTintColor: colors.inversePrimary,
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="menu" // This is the name of the page and must match the url from root
        options={{
          title: "Menu",
          drawerIcon: ({ color, size }) => <Ionicons name="fast-food" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings" // This is the name of the page and must match the url from root
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}

