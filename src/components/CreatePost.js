import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const CreatePost = ({ postText, setPostText }) => {
  const handlePost = () => {
    // Handle the post action here
    console.log("Post button pressed!");
  };

  return (
    <View style={styles.postContainer}>
      <TextInput
        style={styles.input}
        placeholder="Create post"
        multiline
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default CreatePost;
