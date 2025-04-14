import { createContext, ReactNode, useContext } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

export function defineConfig<T extends object>(useValue: (schema: ColorSchemeName) => T) {
  const Context = createContext<T>({} as T);

  function Provider(props: { children: ReactNode }) {
    const scheme = useColorScheme();
    const modifier = useValue(scheme);
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
