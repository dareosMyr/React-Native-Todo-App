import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const handleChange = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="New todo..."
        onChangeText={handleChange}
        style={styles.input}
      />
      <Button
        onPress={() => {
          handleSubmit(text);
        }}
        color="coral"
        title="add todo"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
