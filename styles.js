import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  game: {
    textAlign: "center",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 310,
    marginTop: 20,
  },
  principalTitle: {
    fontSize:
  }
  cell: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#333",
    fontSize: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  cellWinner: {
    backgroundColor: "#aaffaa",
  },
});