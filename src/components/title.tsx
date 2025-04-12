import { Text, View } from "react-native";
import { useModifier } from '../modifier'

export function Title() {
  const modifier = useModifier();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: modifier.color.blue ?? modifier.color.dark.red,
      }}
    >
      <Text
        style={{
          color: modifier.color.red ?? modifier.color.dark.blue,
        }}
      >Hello world</Text>
    </View>
  );
}