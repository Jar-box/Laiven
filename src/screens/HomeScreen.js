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
    },
    // Add more posts as needed
  ]);

  const navigation = useNavigation();

  const handleUpvote = (postId) => {
    // Check if the user has already upvoted
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1 && !posts[postIndex].hasUpvoted) {
      if (!posts[postIndex].hasDownvoted) {
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          votes: updatedPosts[postIndex].votes + 1,
          hasUpvoted: true,
          hasDownvoted: false,
        };
        setPosts(updatedPosts);
      } else if (posts[postIndex].hasDownvoted) {
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          votes: updatedPosts[postIndex].votes + 2,
          hasUpvoted: true,
          hasDownvoted: false,
        };
        setPosts(updatedPosts);
      }
    } else {
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        votes: updatedPosts[postIndex].votes - 1,
        hasUpvoted: false,
        hasDownvoted: false,
      };
      setPosts(updatedPosts);
    }
  };

  const handleDownvote = (postId) => {
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1 && !posts[postIndex].hasDownvoted) {
      if (!posts[postIndex].hasUpvoted) {
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          votes: updatedPosts[postIndex].votes - 1,
          hasUpvoted: false,
          hasDownvoted: true,
        };
        setPosts(updatedPosts);
      } else if (posts[postIndex].hasUpvoted) {
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = {
          ...updatedPosts[postIndex],
          votes: updatedPosts[postIndex].votes - 2,
          hasUpvoted: false,
          hasDownvoted: true,
        };
        setPosts(updatedPosts);
      }
    } else {
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        votes: updatedPosts[postIndex].votes + 1,
        hasUpvoted: false,
        hasDownvoted: false,
      };
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
                {" "}
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
