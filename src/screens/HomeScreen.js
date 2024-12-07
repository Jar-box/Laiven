import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profilePicture: require("../../assets/Sir.jpg"),
      name: "John Doe",
      hoursAgo: "2 hours ago",
      content: "Just had an amazing day at the beach!",
      votes: 8,
      comments: 5,
      shares: 3,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      id: 2,
      profilePicture: require("../../assets/Sir.jpg"),
      name: "John Doe",
      hoursAgo: "3 hours ago",
      content: "Mcdo is better than Jollibee",
      votes: 109,
      comments: 280,
      shares: 53,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      id: 3,
      profilePicture: require("../../assets/sira.jpg"),
      name: "James Peterson",
      hoursAgo: "5 hours ago",
      content: "There are 3 single mothers near me. Is this true?",
      votes: 20,
      comments: 3,
      shares: 1,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      id: 4,
      profilePicture: require("../../assets/Sir.jpg"),
      name: "John Doe",
      hoursAgo: "5 hours ago",
      content: "Is Campbell halal or not? I might give them to my fur babies",
      votes: 12,
      comments: 20,
      shares: 59,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    {
      id: 5,
      profilePicture: require("../../assets/sisterakas.jpg"),
      name: "Junel Makabog",
      hoursAgo: "9 hours ago",
      content: "I'm sick, who will look after my sons?",
      votes: 13,
      comments: 50,
      shares: 19,
      hasUpvoted: false,
      hasDownvoted: false,
    },
    // Add more posts as needed
  ]);

  const navigation = useNavigation();

  const handleUpvote = (postId) => {
    // Find the post by its id
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      const updatedPosts = [...posts];
      const post = updatedPosts[postIndex];

      if (!post.hasUpvoted) {
        // Upvote the post
        if (!post.hasDownvoted) {
          post.votes += 1;
        } else {
          post.votes += 2; // If it was downvoted, cancel out the downvote and add 1 for the upvote
        }
        post.hasUpvoted = true;
        post.hasDownvoted = false;
      } else {
        // Cancel the upvote
        post.votes -= 1;
        post.hasUpvoted = false;
        post.hasDownvoted = false;
      }

      setPosts(updatedPosts);
    }
  };

  const handleDownvote = (postId) => {
    const postIndex = posts.findIndex((post) => post.id === postId);

    if (postIndex !== -1) {
      const updatedPosts = [...posts];
      const post = updatedPosts[postIndex];

      if (!post.hasDownvoted) {
        // Downvote the post
        if (!post.hasUpvoted) {
          post.votes -= 1;
        } else {
          post.votes -= 2; // If it was upvoted, cancel out the upvote and subtract 1 for the downvote
        }
        post.hasUpvoted = false;
        post.hasDownvoted = true;
      } else {
        // Cancel the downvote
        post.votes += 1;
        post.hasUpvoted = false;
        post.hasDownvoted = false;
      }

      setPosts(updatedPosts);
    }
  };

  const handleComment = (postId) => {
    // Implement comment functionality
    // Navigate to the comment section or show a modal
  };

  const handleShare = (postId) => {
    // Implement share functionality
    // Update the state accordingly
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.createPostButton}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Text style={styles.createPostButtonText}>Create post</Text>
      </Pressable>
      {posts.map((post) => (
        <View key={post.id} style={styles.border}>
          <View style={styles.postContainer}>
            <View style={styles.header}>
              <Image
                source={post.profilePicture}
                style={styles.profilePicture}
              />
              <View>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.hoursAgo}>{post.hoursAgo}</Text>
              </View>
            </View>
            <Text style={styles.content}>{post.content}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <Pressable onPress={() => handleUpvote(post.id)}>
                  <MaterialCommunityIcons
                    name={
                      post.hasUpvoted
                        ? "arrow-up-bold"
                        : "arrow-up-bold-outline"
                    }
                    size={20}
                    color={post.hasUpvoted ? "#38FF88" : "rgba(17, 5, 20, 0.3)"}
                  />
                </Pressable>
                <Text>{post.votes}</Text>
                <Pressable onPress={() => handleDownvote(post.id)}>
                  <MaterialCommunityIcons
                    name={
                      post.hasDownvoted
                        ? "arrow-down-bold"
                        : "arrow-down-bold-outline"
                    }
                    size={20}
                    color={
                      post.hasDownvoted ? "#DB836D" : "rgba(17, 5, 20, 0.3)"
                    }
                  />
                </Pressable>
              </View>
              <Pressable
                onPress={() => handleComment(post.id)}
                style={styles.buttonContainer}
              >
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color={"rgba(17, 5, 20, 0.3)"}
                />
                <Text>{post.comments}</Text>
              </Pressable>
              <Pressable
                onPress={() => handleShare(post.id)}
                style={styles.buttonContainer}
              >
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color={"rgba(17, 5, 20, 0.3)"}
                />
                <Text>{post.shares}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3FC",
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  postContainer: {
    margin: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontWeight: "bold",
  },
  hoursAgo: {
    color: "#888",
  },
  content: {
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  createPostButton: {
    backgroundColor: "rgba(203, 140, 218, 0.1)",
    borderRadius: 100,
    padding: 15,
    margin: 16,
  },
  createPostButtonText: {
    color: "rgba(17, 5, 20, .7)",
    fontFamily: "Inter_400Regular",
  },
});

export default HomeScreen;
