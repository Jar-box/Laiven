import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import JournalList from "./src/components/JournalList";
import CreateJournalEntryScreen from "./src/screens/CreateJournalEntryScreen";
import JournalDetailScreen from "./src/screens/JournalDetailScreen";
import CreatePost from "./src/components/CreatePost";
import Plans from "./src/components/Plans"
import AddPlanScreen from "./src/screens/AddPlanScreen";

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
          title: route.params.date,
        })}
      />
    </Stack.Navigator>
  );
};

const PlansStack = () => {
  const [plans, setPlans] = useState([]);

  const handleAddPlan = (addedPlan) => {
    setPlans((prevPlans) => [...prevPlans, addedPlan]);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plans"
        options={{ title: "Plans" }}
      >
        {(props) => <Plans {...props} plans={plans} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddPlanScreen"
        component={AddPlanScreen}
        options={{ title: "Add Plan" }}
        initialParams={{ onAddPlan: handleAddPlan }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Laiven" }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={({ navigation }) => ({
          title: "Create Post",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => {
                // Implement your logic for the "Post" button in Create Post
                navigation.navigate("HomeScreen");
              }}
            >
              <Text
                style={{
                  fontWeight: 700,
                  color: "#F0F6F6",
                  backgroundColor: "#CF22FF",
                  borderRadius: 100,
                  paddingVertical: 4,
                  paddingHorizontal: 14,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          ),
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
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Plans"
          component={PlansStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Journal"
          component={JournalStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
