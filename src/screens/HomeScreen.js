import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ayoko na</Text>
      <Button title="Journal" onPress={() => navigation.navigate("Journal")} />
    </View>
  );
};

export default HomeScreen;
