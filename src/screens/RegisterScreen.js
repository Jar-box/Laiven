import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  Picker,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  // States to hold user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to handle errors
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !gender
    ) {
      newErrors.general = "Please fill all fields.";
      valid = false;
    }

    // Password validation (e.g., length check)
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle register button click
  const handleRegister = () => {
    if (validateForm()) {
      // Proceed with registration logic
      setErrors({}); // Reset errors
      navigation.navigate("HomeScreen"); // Navigate to HomeScreen on success
    } else {
      Alert.alert("Error", "Please fix the errors before submitting.");
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.twoRowContainer}>
          <View style={styles.entryName}>
            <TextInput
              style={styles.entryText}
              placeholder="First name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.entryName}>
            <TextInput
              style={styles.entryText}
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.entryBox}>
          {/* Gender Picker with updated font style and size */}
          <Picker
            selectedValue={gender}
            style={styles.genderPicker}
            onValueChange={setGender}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>

        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Display Errors */}
        {errors.general && (
          <Text style={styles.errorText}>{errors.general}</Text>
        )}
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Pressable
          style={styles.registerButton}
          onPress={handleRegister}
          disabled={
            !firstName ||
            !lastName ||
            !username ||
            !email ||
            !password ||
            !gender
          }
        >
          <Text style={styles.buttonText}>Create account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#CF22FF",
    padding: 8,
  },

  container: {
    padding: 18,
    alignItems: "center",
  },

  entryBox: {
    backgroundColor: "#FAF3FC",
    borderRadius: 8,
    width: "100%",
    height: 50,
    marginTop: 10,
  },

  entryText: {
    marginTop: "auto",
    marginBottom: "auto",
    marginHorizontal: 10,
    color: "#000000", // Text color when user types
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },

  genderPicker: {
    marginTop: "auto",
    marginBottom: "auto",
    marginHorizontal: 10,
    backgroundColor: "transparent", // Make background transparent
    borderWidth: 0, // Remove border
    color: "#000000", // Text color for gender picker
    fontFamily: "Inter_400Regular", // Same font style as other inputs
    fontSize: 13, // Same font size as other inputs
  },

  registerButton: {
    backgroundColor: "rgba(17, 5, 20, 0.5)",
    borderRadius: 8,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  buttonText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: "#FAF3FC",
  },

  entryName: {
    flex: 1,
    backgroundColor: "#FAF3FC",
    borderRadius: 8,
    height: 50,
  },

  twoRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
  },

  errorText: {
    color: "#333333", // Slightly lighter black for errors
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    marginTop: 5,
  },
});

export default RegisterScreen;
