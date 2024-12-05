import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Maiven</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.loginText} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.loginText}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
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
    marginBottom: 50,
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
  },
});

export default LoginScreen;
