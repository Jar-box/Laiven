import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.twoRowContainer}>
          <View style={styles.entryName}>
            <TextInput
              style={styles.entryText}
              placeholder="First name"
            ></TextInput>
          </View>
          <View style={styles.entryName}>
            <TextInput
              style={styles.entryText}
              placeholder="Last name"
            ></TextInput>
          </View>
        </View>
        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Username"
          ></TextInput>
        </View>
        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Birthday"
          ></TextInput>
        </View>
        <View style={styles.entryBox}>
          <TextInput style={styles.entryText} placeholder="Gender"></TextInput>
        </View>
        <View style={styles.entryBox}>
          <TextInput style={styles.entryText} placeholder="Email"></TextInput>
        </View>
        <View style={styles.entryBox}>
          <TextInput
            style={styles.entryText}
            placeholder="Password"
          ></TextInput>
        </View>
        <Pressable
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
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
    color: "rgba(17, 5, 20, 0.5)",
    fontFamily: "Inter_400Regular",
    fontSize: 13,
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
});

export default RegisterScreen;
