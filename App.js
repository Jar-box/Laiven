import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import JournalList from "./src/components/JournalList";
import CreateJournalEntryScreen from "./src/screens/CreateJournalEntryScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JournalStack = () => {
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
      content:
        "Crush ko na si tristan joe lopez kelan ba ako aamin sa kanya huhuhuhuh",
    },
  ]);
  const navigation = useNavigation();

  const handleNotePress = (noteId) => {
    // Implement navigation to individual note screen or edit screen
    console.log(`Note pressed: ${noteId}`);
  };

  const handleCreateEntry = (newEntry) => {
    // Handle the creation of a new journal entry
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: prevNotes.length + 1, ...newEntry },
    ]);
    // Optionally, you can navigate back to the JournalList screen or reset the form
    navigation.goBack();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JournalList"
        component={() => (
          <JournalList notes={notes} onNotePress={handleNotePress} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateJournalEntry"
        component={() => (
          <CreateJournalEntryScreen onCreateEntry={handleCreateEntry} />
        )}
        options={{ title: "Create Journal Entry" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleNotePress = (noteId) => {
    // Implement navigation to individual note screen or edit screen
    console.log(`Note pressed: ${noteId}`);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Journal"
          component={() => (
            <JournalStack notes={notes} handleNotePress={handleNotePress} />
          )}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
