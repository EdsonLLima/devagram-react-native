import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../app.json";

//capturando a altura e largura do dispositivo
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerInput: {
    marginTop: height / 20,
    width: width / 1.3,
    height: height / 25,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1,
  },

  input: {
    width: width / 1.4,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "biennale",
    color: colors.grayColor02,
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
  },
});

export default styles;
