import { defineConfig } from "./react-native-modifier";

export const { Provider, useModifier } = defineConfig((schema) => ({
  color: {
    red: schema === "light" ? "red" : undefined,
    blue: schema === "light" ? "blue" : undefined,
    dark: {
      red: schema === "dark" ? "yellow" : undefined,
      blue: schema === "dark" ? "green" : undefined,
    },
  },
}));
