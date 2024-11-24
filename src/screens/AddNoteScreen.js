import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const AddNoteScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [plan, setPlan] = useState("");

  const handleAddNote = () => {
    // Handle adding the plan to your data or store
    const addedNote = { title, plan };
    console.log("Added Note:", addedNote);

    // Pass the added plan back to the Plans component
    route.params.onAddNote(addedNote);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Title Input */}
      <TextInput
        style={[styles.input, styles.titleInput]}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      {/* Plan Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your plan"
        value={plan}
        onChangeText={(text) => setPlan(text)}
        multiline
      />

      {/* Add Plan Button */}
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  titleInput: {
    fontWeight: "bold",
  },
});

export default AddNoteScreen;
