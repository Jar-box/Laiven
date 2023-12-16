import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterTypeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>
          How long have you been a parent?
        </Text>
      </View>
      <View style={styles.buttonPosition}>
        <Pressable
          style={styles.choiceButton}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.buttonText}>I'm an experienced parent</Text>
        </Pressable>
        <Pressable
          style={styles.choiceButton}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.buttonText}>I'm a new parent</Text>
        </Pressable>
        <Pressable
          style={styles.choiceButton}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.buttonText}>I'm an incoming parent</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CF22FF",
    padding: 8,
  },

  subHeader: {
    margin: 18,
  },

  subHeaderText: {
    fontFamily: "Inter_500Medium",
    fontSize: "15.6px",
    color: "#FAF3FC",
  },

  choiceButton: {
    backgroundColor: "rgba(17, 5, 20, 0.5)",
    borderRadius: 8,
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  buttonText: {
    fontFamily: "Inter_400Regular",
    fontSize: "13px",
    color: "#FAF3FC",
  },

  buttonPosition: { alignItems: "center" },
});

export default RegisterTypeScreen;
