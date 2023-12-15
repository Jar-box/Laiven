import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom-styled Create Post button */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "#CF22FF",
          borderRadius: 20,
          elevation: 2, // Add elevation for a subtle shadow (Android)
          shadowColor: "#000", // iOS
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        }}
        onPress={() => navigation.navigate("CreatePost")}
      >
        {/* You can add an icon or any other styling here */}
        <Text
          style={{
            color: "#F0F6F6",
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 8,
          }}
        >
          +
        </Text>
        <Text style={{ color: "#F0F6F6", fontSize: 16, fontWeight: "bold" }}>
          Create Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
