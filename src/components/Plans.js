// Import necessary modules
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// YourComponent definition
const YourComponent = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleNotesPress = () => {
    if (selectedButton === "Notes") {
      // If "Notes" is already selected, do nothing
      return;
    }

    // Otherwise, navigate to the Notes screen
    navigation.navigate("NotesScreen");
    setSelectedButton("Notes");
  };

  const handlePlansPress = () => {
    if (selectedButton === "Plans") {
      // If "Plans" is already selected, navigate to the AddPlanScreen
      navigation.navigate("AddPlanScreen");
    } else {
      // Otherwise, navigate to the Plans screen and deselect "Notes"
      navigation.navigate("PlansScreen");
      setSelectedButton("Plans");
    }
  };

  const handleAddPlan = (addedPlan) => {
    setPlans((prevPlans) => [...prevPlans, addedPlan]);
  };

  // Circular button for the "Plans" section
  const plansButton = (
    <TouchableOpacity
      style={styles.circularButton}
      onPress={() => navigation.navigate("AddPlanScreen")}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Mini Navigation Bar */}
      <View style={styles.miniNavBar}>
        <TouchableOpacity
          onPress={handleNotesPress}
          style={[
            styles.button,
            selectedButton === "Notes" && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePlansPress}
          style={[
            styles.button,
            selectedButton === "Plans" && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Plans</Text>
        </TouchableOpacity>
      </View>

      {/* Display additional content for "Plans" section if selected */}
      {selectedButton === "Plans" && plansButton}

      {/* Rest of your component */}
      <TextInput placeholder="Your input field" />

      {/* Other UI components and logic */}
    </View>
  );
};

// Styles definition
const styles = StyleSheet.create({
  miniNavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    padding: 8,
    marginRight: 50,
    marginLeft: 50,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selectedButton: {
    borderBottomWidth: 4,
    borderBottomColor: "#cf22ff",
  },
  circularButton: {
    position: "absolute",
    top: 550,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#cf22ff",
    justifyContent: "center",
    alignItems: "center",
  },
});

// Export YourComponent as default
export default YourComponent;
