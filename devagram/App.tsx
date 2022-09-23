import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import Button from "./src/_components/Button";

export default function App() {
  const [fontsLoaded] = useFonts({
    biennale: require("./assets/fonts/biennale-regular.otf"),
    "biennale-bold": require("./assets/fonts/biennale-bold.otf"),
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <Button
        onPress={() => {}}
        placeholder="Clique aqui"
        loading={false}
        disabled={false}
      />
    </View>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
