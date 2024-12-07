import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import HomeScreen from "../screens/HomeScreen";

const CreatePost = ({ posts, setPosts }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [profileName, setProfileName] = useState("New User");
  const [profilePicture, setProfilePicture] = useState(
    "https://randomuser.me/api/portraits/men/3.jpg"
  );

  const handleCreatePost = async (e) => {
    e.preventDefault();
    console.log("post added: " + messageRef.current.value);

    const newPost = {
      id: String(posts.length + 1),
      name: profileName,
      profilePicture: profilePicture,
      time: "Just now",
      content: newPostContent,
      upvotes: 0,
      downvotes: 0,
      comments: 0,
    };
    setPosts([newPost, ...posts]); // Add new post at the top
    setNewPostContent(""); // Clear input
    navigation.goBack(); // Go back to News Feed
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

        <button type="button" onPress={handleCreatePost}>
          Post
        </button>
      </View>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        multiline
        value={newPostContent}
        onChangeText={setNewPostContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "80%",
    height: 100,
    marginBottom: 20,
    marginTop: 45,
    left: 50,
  },
  input: {
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    padding: 10,
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreatePost;
