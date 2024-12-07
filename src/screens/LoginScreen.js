import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  // State to store username, password and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleLogin = () => {
    // Hardcoded credentials
    const correctUsername = "WoPaPaCaCa";
    const correctPassword = "1234567890";

    // Check if username and password match
    if (username === correctUsername && password === correctPassword) {
      setUsername(""); // Clear username input after login
      setPassword(""); // Clear password input after login
      setErrorMessage(""); // Clear any previous error message
      navigation.navigate("HomeScreen"); // Navigate to HomeScreen
    } else {
      setErrorMessage("Invalid username or password"); // Set error message
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Maiven</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.loginText}
            placeholder="Username"
            value={username}
            onChangeText={setUsername} // Update username state
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.loginText}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword} // Update password state
          />
        </View>
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text> // Display error message if exists
        ) : null}
        <Text style={styles.forgotText}>Forgot password?</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <Pressable
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate("RegisterTypeScreen");
          }}
        >
          <Text style={styles.registerText}>Create new account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CF22FF",
    padding: 8,
  },
  contentContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Pacifico_400Regular",
    color: "#FAF3FC",
    marginBottom: 100,
  },
  loginButton: {
    backgroundColor: "rgba(17, 5, 20, 0.5)",
    borderRadius: 8,
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    fontFamily: "Inter_400Regular",
    fontSize: "13px",
  },
  buttonText: {
    color: "#FAF3FC",
    fontFamily: "Inter_500Medium",
    fontSize: "13px",
  },
  inputContainer: {
    backgroundColor: "#FAF3FC",
    borderRadius: 8,
    width: 350,
    height: 50,
    marginTop: 12,
  },
  loginText: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 15,
    color: "rgba(17, 5, 20, 0.5)",
    fontFamily: "Inter_400Regular",
    fontSize: "13px",
  },
  registerButton: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: "#FAF3FC",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "#FAF3FC",
    fontFamily: "Inter_500Medium",
    fontSize: "13px",
  },
  forgotText: {
    color: "#FAF3FC",
    fontFamily: "Inter_500Medium",
    fontSize: "10.83px",
    marginTop: 50,
  },
  errorText: {
    color: "#3B0E0E",
    fontFamily: "Inter_500Medium",
    fontSize: "13px",
    marginTop: 13,
  },
});

export default LoginScreen;
