import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 120 / 2,
    marginVertical: 10,
  },
  imgContent: {
    width: 141.3,
    height: 141.3,
  },
  container: {
    // borderWidth: 1,
  },
  Identity: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 20,
    // borderWidth: 1,
  },
  detailInfo: {
    gap: 20,
    paddingVertical: 10,
  },
  username: {
    fontFamily: "bold",
    fontSize: 17,
  },
  name: {
    fontFamily: "regular",
    fontSize: 14,
  },
  email: {
    fontSize: 17,
  },
  phoneNumber: {
    fontSize: 17,
  },
  postCount: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  middlePost: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  mainContent: {
    marginVertical: 20,
    // borderWidth: 1,
  },
  displayContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
});

export default styles;
