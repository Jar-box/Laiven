// AddPlanScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const AddPlanScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [plan, setPlan] = useState("");

  const handleAddPlan = () => {
    // Handle adding the plan to your data or store
    const addedPlan = { title, plan };
    console.log("Added Plan:", addedPlan);

    // Pass the added plan back to the Plans component
    route.params.onAddPlan(addedPlan);

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
      <Button title="Add Plan" onPress={handleAddPlan} />
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
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  titleInput: {
    fontWeight: "bold",
  },
});

export default AddPlanScreen;
