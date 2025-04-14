import { createContext, ReactNode, useContext } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";

export function defineConfig<T extends object>(useValue: (config: {
  light: <const U>(value: U) => U | undefined;
  dark: <const U>(value: U) => U | undefined;
  min: (value: number) => undefined;
  max: (value: number) => undefined;
  between: (min: number, max: number) => undefined;
}) => T) {
  const Context = createContext<T>({} as T);

  function Provider(props: { children: ReactNode }) {
    const scheme = useColorScheme();
    const dimensions = useWindowDimensions();
    const modifier = useValue({
      light: (value) => (scheme === "light" ? value : undefined),
      dark: (value) => (scheme === "dark" ? value : undefined),
      min: (value) => undefined,
      max: (value) => undefined,
      between: (min, max) => undefined,
    });
    return (
      <Context.Provider value={modifier}>
        {props.children}
      </Context.Provider>
    );
  }

  function useModifier() {
    return useContext(Context);
  }

  return { Provider, useModifier };
}
