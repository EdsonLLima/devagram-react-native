import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    biennale: require("./assets/fonts/biennale-regular.otf"),
    "biennale-bold": require("./assets/fonts/biennale-bold.otf"),
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <Text style={{ fontFamily: "biennale-bold" }}>
        Fonte de Vida e de beleza rara.
      </Text>
      <StatusBar style="auto" />
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
