import React from "react";
import { FlatList, Text, Pressable, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import JournalEntry from "./JournalEntry";

const JournalList = ({ entries }) => {
  const navigation = useNavigation();

  const handleCreateEntry = () => {
    navigation.navigate("CreateJournalEntry");
  };

  const handleNotePress = (entryId) => {
    const selectedNote = entries.find((entry) => entry.id === entryId);
    if (selectedNote) {
      navigation.navigate("JournalDetail", selectedNote);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JournalEntry
            date={item.date}
            rating={item.rating}
            content={item.content}
            onPress={() => handleNotePress(item.id)}
          />
        )}
        ListHeaderComponent={<View />}
      />
      <Pressable
        style={({ pressed }) => [
          {
            ...styles.floatingButton,
            backgroundColor: pressed ? "#AD6F91" : "#CF22FF",
          },
        ]}
        onPress={handleCreateEntry}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default JournalList;
