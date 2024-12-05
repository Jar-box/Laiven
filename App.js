import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import HomeScreen from "./src/screens/HomeScreen";
import firestore from "./db/firestore";
import JournalList from "./src/components/JournalList";
import CreateJournalEntryScreen from "./src/screens/CreateJournalEntryScreen";
import JournalDetailScreen from "./src/screens/JournalDetailScreen";
import CreatePost from "./src/components/CreatePost";
import Plans from "./src/components/Plans";
import AddPlanScreen from "./src/screens/AddPlanScreen";
import CalendarScreen from "./src/screens/JournalCalendarScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RegisterTypeScreen from "./src/screens/RegisterTypeScreen";
import AddNoteScreen from "./src/screens/AddNoteScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JournalStack = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "Dec 12, 2024",
      rating: "Positive",
      content: "Dear diary.....",
    },
    {
      id: 2,
      date: "Dec 13, 2024",
      rating: "Moderate",
      content: "Crush ko na si.... kelan ba ako aamin sa kanya huhuhuhuh",
    },
    {
      id: 3,
      date: "Dec 15, 2024",
      rating: "Harsh",
      content: "Dear diary......",
    },
  ]);

  const navigation = useNavigation();

  const handleCreateEntry = (newEntry) => {
    setEntries((prevNotes) => [
      ...prevNotes,
      { id: prevNotes.length + 1, ...newEntry },
    ]);
    navigation.goBack();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JournalList"
        options={{
          title: "Journal",
          headerTitleStyle: {
            fontFamily: "Inter_600SemiBold",
          },
        }}
      >
        {() => <JournalList entries={entries} />}
      </Stack.Screen>
      <Stack.Screen
        name="CreateJournalEntry"
        options={{
          title: "Create Journal Entry",
          headerTitleStyle: {
            fontFamily: "Inter_600SemiBold",
          },
        }}
      >
        {() => <CreateJournalEntryScreen onCreateEntry={handleCreateEntry} />}
      </Stack.Screen>
      <Stack.Screen
        name="JournalDetail"
        component={JournalDetailScreen}
        options={({ route }) => ({
          title: route.params.date,
          headerTitleStyle: {
            fontFamily: "Inter_600SemiBold",
          },
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
      <Stack.Screen name="Plans" options={{ title: "Plans" }}>
        {(props) => <Plans {...props} plans={plans} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddPlanScreen"
        component={AddPlanScreen}
        options={{ title: "Add Plan" }}
        initialParams={{ onAddPlan: handleAddPlan }}
      />

      <Stack.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
        options={{ title: "Add Note" }}
        initialParams={{ onAddNote: handleAddPlan }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const [postText, setPostText] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Maiven",
          title: "Maiven",
          headerTitleStyle: {
            fontFamily: "Pacifico_400Regular",
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={({ navigation }) => ({
          title: "Create Post",
          headerTitleStyle: {
            fontFamily: "Inter_600SemiBold",
          },
        })}
      />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#CF22FF",
        },
        headerTintColor: "#FAF3FC",
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterTypeScreen"
        component={RegisterTypeScreen}
        options={{ title: "Create account" }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "Create account" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="calendar" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Journal"
            component={JournalStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="book-open"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Plans"
            component={PlansStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="clipboard" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Log out"
            component={LoginStack}
            options={{
              headerShown: false,
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="log-out" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
