import React from "react";
import {
  View,
  TextInput,
  Image,
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

      <View style={styles.profileContainer}>
      <Image
          source={require('../../assets/Sir.jpg')} 
          style={styles.profileImage}
        />
      <Text style={styles.usernameText}>Jerremy</Text>
      </View>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -15,
    position: 'absolute',
    left: -35,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostForm;
