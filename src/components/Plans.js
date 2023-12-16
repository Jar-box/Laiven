import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";



const YourComponent = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleNotesPress = () => {
    // Navigate to Notes screen
    navigation.navigate("NotesScreen");
    setSelectedButton("Notes");
  };

  const handlePlansPress = () => {
    // Navigate to Plans screen
    navigation.navigate("PlansScreen");
    setSelectedButton("Plans");
  };

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

      {/* Rest of your component */}
      <TextInput placeholder="Your input field" />

      {/* Other UI components and logic */}
    </View>
  );
};

const styles = StyleSheet.create({
  miniNavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#fff", // Add your desired background color
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Add your desired border color
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
});

export default YourComponent;
