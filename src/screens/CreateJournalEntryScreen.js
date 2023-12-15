import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateJournalEntryScreen = ({ onCreateEntry }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString("default", {
      month: "short",
    })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    setDate(formattedDate);
  }, []);

  const handleCreateEntry = () => {
    // Validate the input if needed

    // Create a new entry object
    const newEntry = {
      date,
      rating,
      content,
    };

    // Call the provided callback to create the entry
    onCreateEntry(newEntry);

    // Reset the form
    resetForm();

    // Navigate back to the JournalList screen
    navigation.navigate("JournalList");
  };

  const resetForm = () => {
    // Reset the state values to their initial state or empty strings
    setRating("");
    setContent("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={(text) => setDate(text)}
          editable={false} // Make the date field non-editable
        />

        <Text>Rating:</Text>
        <TextInput
          style={styles.input}
          value={rating}
          onChangeText={(text) => setRating(text)}
        />

        <Text>Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline
        />

        <Button
          title="Create Entry"
          onPress={handleCreateEntry}
          color="#CF22FF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
});

export default CreateJournalEntryScreen;
