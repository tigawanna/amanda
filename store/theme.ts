import { create } from "zustand";
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved");
    const data = (await AsyncStorage.getItem(name)) || null;

    console.log("data: ", data);
    return data;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved");
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted");
    await AsyncStorage.removeItem(name);
  },
};

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface ThemeState {
  theme: "light" | "dark";
  toggle: (id: string) => void;
}


export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => {
    //   const colorScheme = useColorScheme();
    //   const initialTheme = colorScheme === "dark" ? "dark" : "light";

      return {
        theme: "dark",
        toggle: (id: string) => {
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          }));
        },
      };
    },
    {
      name: "theme-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);
