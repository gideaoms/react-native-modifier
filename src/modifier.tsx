import { createContext, ReactNode, useContext } from "react";
import { useColorScheme } from "react-native";

type Modifier = {
  color: { 
    red?: string; 
    blue?: string; 
    dark: { 
      red?: string; 
      blue?: string 
    } 
  };
};

const Context = createContext<Modifier>(null!);

declare namespace Provider {
  type Props = {
    children: ReactNode;
  };
}

export function Provider(props: Provider.Props) {
  const colorScheme = useColorScheme();
  const color = {
    red: colorScheme === "light" ? "red" : undefined,
    blue: colorScheme === "light" ? "blue" : undefined,
    dark: {
      red: colorScheme === "dark" ? "yellow" : undefined,
      blue: colorScheme === "dark" ? "green" : undefined,
    },
  };
  return <Context.Provider value={{ color }}>{props.children}</Context.Provider>;
}

export function useModifier() {
  return useContext(Context);
}
