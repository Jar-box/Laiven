import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const PostForm = ({ postText, setPostText, handlePost }) => {
  return (
    <View style={styles.postContainer}>
      <TextInput
        style={styles.input}
        placeholder="Create post"
        multiline
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      <View style={styles.postbuttonContainer}>
        <TouchableOpacity style={styles.rectangularButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "80%",
    height: 100,
    marginBottom: 20,
    marginTop: 105,
    left: 25,
  },
  input: {
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
  },
  postbuttonContainer: {
    position: "absolute",
    top: 42,
    right: 21,
  },
  rectangularButton: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#cf22ff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default PostForm;
