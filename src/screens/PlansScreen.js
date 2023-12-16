// PlansScreen.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlansScreen = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: "Dec 15, 2023",
      rating: "Bad",
      content: "Dear diary...,,winsmarl canaughty...",
    },
    {
      id: 2,
      date: "Dec 1, 2023",
      rating: "Kinikilig",
      content: "Crush ko na si tristan joe lopez kelan ba ako aamin sa kanya huhuhuhuh",
    },
  ]);

  const handleNotePress = (noteId) => {
    const selectedNote = notes.find((note) => note.id === noteId);
    if (selectedNote) {
      navigation.navigate("JournalDetail", selectedNote);
    }
  };

  const handleCreateEntry = (newEntry) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: prevNotes.length + 1, ...newEntry },
    ]);
    navigation.goBack();
  };

  // Render the list of notes
  const renderNoteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNotePress(item.id)} style={styles.noteItem}>
      <Text>{item.date}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Your existing "Plans" section */}
      {/* ... */}

      {/* Journal Stack */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNoteItem}
      />

      {/* Add a button to create a new entry */}
      <TouchableOpacity onPress={() => navigation.navigate("JournalCreate", { onCreate: handleCreateEntry })} style={styles.createButton}>
        <Text>Create New Entry</Text>
      </TouchableOpacity>

      {/* Other UI components and logic */}
      <TextInput placeholder="Your input field" />
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  createButton: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlansScreen;
