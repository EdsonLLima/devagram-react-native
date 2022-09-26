import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import Button from "./src/_components/Button";
import Input from "./src/_components/Input";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState<string>("");
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
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu E-mail"}
        value={email}
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
