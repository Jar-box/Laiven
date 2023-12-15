import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import JournalList from "./src/components/JournalList";
import CreateJournalEntryScreen from "./src/screens/CreateJournalEntryScreen";
import JournalDetailScreen from "./src/screens/JournalDetailScreen";
import PostForm from "./src/components/PostForm";
import { TouchableOpacity, Text } from "react-native";

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

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JournalList"
        component={() => (
          <JournalList notes={notes} onNotePress={handleNotePress} />
        )}
        options={{ title: "Journal" }}
      />
      <Stack.Screen
        name="CreateJournalEntry"
        component={() => (
          <CreateJournalEntryScreen onCreateEntry={handleCreateEntry} />
        )}
        options={{ title: "Create Journal Entry" }}
      />
      <Stack.Screen
        name="JournalDetail"
        component={JournalDetailScreen}
        options={({ route }) => ({
          // Use the note's date as the title
          title: route.params.date, // Use the date as the title
        })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Journal"
          component={() => <JournalStack />}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="PostForm"
          component={PostForm}
          options={({ navigation }) => ({
            title: "Create Post",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => {
                  // Navigate to the CreateJournalEntry screen or implement your logic
                  navigation.navigate("CreateJournalEntry");
                }}
              >
                <Text style={{ color: "#06D6A0", fontSize: 16 }}>Create Entry</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
