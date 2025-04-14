import { defineConfig } from "./react-native-modifier";

export const { Provider, useModifier } = defineConfig((config) => ({
  color: {
    yellow: config.light('yellow'),
    red: config.light('red'),
    blue: config.light('blue'),
    dark: {
      red: config.dark('red'),
      blue: config.dark('blue'),
    },
  },
  font: {
    size: {
      sm: 10,
      bg: 12,
      lg: 14,
    },
    family: {
      roboto: 'Roboto',
    },
  },
  screen: {
    sm: config.max(480),
    md: config.between(481, 1024),
    lg: config.between(1025, 1280),
    xl: config.min(1281),
  },
}));
