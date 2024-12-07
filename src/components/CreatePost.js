import React, { useRef } from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { firestore } from "../../db/firestore";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const CreatePost = ({ postText, setPostText }) => {
  const messageRef = useRef();
  const ref = collection(firestore, "post");

  const navigation = useNavigation(); // Initialize useNavigation

  const handleSave = async (e) => {
    e.preventDefault();

    console.log("post added: " + messageRef.current.value);

    let data = {
      post: messageRef.current.value,
    };

    try {
      await addDoc(ref, data);
      setPostText(""); // Clear the input after saving the post
      navigation.navigate("HomeScreen"); // Navigate to HomeScreen after saving the post
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/Sir.jpg")}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.usernameText}>John Doe</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Create a post..."
        multiline
        value={postText}
        onChangeText={setPostText}
        ref={messageRef}
      />

      <Pressable style={styles.postButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Post</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "90%",
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds slight shadow on Android
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    height: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#333",
    textAlignVertical: "top", // Align text to the top of the input field
  },
  postButton: {
    marginTop: 10,
    backgroundColor: "#CF22FF",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CreatePost;
