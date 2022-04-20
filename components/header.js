import { StyleSheet, Text, View } from "react-native";

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My To Dos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default header;
