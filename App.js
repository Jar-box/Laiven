import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JournalStack = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "Dec 15, 2023",
      rating: "Select rating",
      content: "How's your day?",
    },
    {
      id: 2,
      date: "Dec 12, 2023",
      rating: "Positive",
      content: "Lorem ipsum i miss u so much",
    },
    {
      id: 3,
      date: "Dec 13, 2023",
      rating: "Moderate",
      content:
        "Crush ko na si tristan joe lopez kelan ba ako aamin sa kanya huhuhuhuh",
    },
    {
      id: 4,
      date: "Dec 15, 2023",
      rating: "Harsh",
      content: "Dear diary...,,winsmarl canaughty...",
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
          title: "Laiven",
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
          headerRight: () => (
            <Pressable
              style={({ pressed }) => [
                {
                  marginRight: 16,
                  backgroundColor: pressed ? "#AD6F91" : "#CF22FF",
                  borderRadius: 100,
                  paddingVertical: 4,
                  paddingHorizontal: 14,
                },
              ]}
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            >
              <Text style={{ fontWeight: 700, color: "#FAF3FC" }}>Post</Text>
            </Pressable>
          ),
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
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen
            name="Login"
            component={LoginStack}
            options={{ headerShown: false, tabBarStyle: { display: "none" } }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
