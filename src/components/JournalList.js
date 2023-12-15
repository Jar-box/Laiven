import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import JournalEntry from "./JournalEntry";
import { useNavigation } from "@react-navigation/native";

const JournalList = ({ notes, onNotePress, onCreateEntryPress }) => {
  const navigation = useNavigation();

  const handleCreateEntry = () => {
    // Navigate to the CreateEntryScreen
    navigation.navigate("CreateJournalEntry");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JournalEntry
            date={item.date}
            rating={item.rating}
            content={item.content}
            onPress={() => onNotePress(item.id)}
          />
        )}
        ListHeaderComponent={<View />}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleCreateEntry}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
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
    backgroundColor: "#CF22FF",
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
