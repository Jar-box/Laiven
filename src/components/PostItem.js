// src/components/PostItem.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const PostItem = ({ post, onUpvote, onDownvote, onAddComment }) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Image
        source={{ uri: post.profilePicture }}
        style={styles.profilePicture}
      />
      <View>
        <Text style={styles.postName}>{post.name}</Text>
        <Text style={styles.postTime}>{post.time}</Text>
      </View>
    </View>
    <Text style={styles.postContent}>{post.content}</Text>
    <View style={styles.postActions}>
      <TouchableOpacity onPress={() => onUpvote(post.id)}>
        <Text>👍 {post.upvotes}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDownvote(post.id)}>
        <Text>👎 {post.downvotes}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onAddComment(post.id)}>
        <Text>💬 {post.comments}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postName: {
    fontWeight: "bold",
  },
  postTime: {
    color: "#888",
  },
  postContent: {
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PostItem;
