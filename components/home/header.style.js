import { COLORS } from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // height: 400,
    // backgroundColor: "red",
    position: "relative",
  },
  contentWrapper: {
    // height: 300,
    // backgroundColor: "#d4d4d4",

    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // paddingTop: 20,
  },
  setTextcolor: {
    color: COLORS.neutral[700],
  },
  headerContent: {
    // marginHorizontal: 22,
    // marginVertical: 15,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 120 / 2,
  },
});

export default styles;
