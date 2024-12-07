import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Picker,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateJournalEntryScreen = ({ onCreateEntry }) => {
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString("default", {
      month: "short",
    })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    setDate(formattedDate);
  }, []);

  const handleCreateEntry = () => {
    const newEntry = {
      date,
      rating,
      content,
    };

    onCreateEntry(newEntry);
    navigation.navigate("JournalList");
  };

  const isButtonDisabled = !rating || !content.trim();

  return (
    <View style={styles.container}>
      <Text>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={(text) => setDate(text)}
        readOnly={true}
      />

      <Text>Rating:</Text>
      <Picker
        selectedValue={rating}
        onValueChange={(itemValue) => setRating(itemValue)}
        style={styles.input}
      >
        {!rating && <Picker.Item label="Select Rating" value="" />}
        <Picker.Item label="Positive" value="Positive" />
        <Picker.Item label="Moderate" value="Moderate" />
        <Picker.Item label="Harsh" value="Harsh" />
      </Picker>

      <Text>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && !isButtonDisabled && styles.buttonPressed,
          isButtonDisabled && styles.buttonDisabled,
        ]}
        onPress={handleCreateEntry}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Create Entry</Text>
      </Pressable>
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
  button: {
    backgroundColor: "#CF22FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#F0F6F6",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateJournalEntryScreen;
