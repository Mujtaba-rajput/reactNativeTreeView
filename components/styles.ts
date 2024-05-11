import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    paddingTop: Platform.OS === "ios" ? 20 : 50,
  },
  listContainer: {
    flex: 8.5,
    paddingHorizontal: 30,
    backgroundColor: "#D6D3D3",
    paddingVertical: 10,
  },
  selectedContainer: {
    flex: 1.5,
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginBottom: 5,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
