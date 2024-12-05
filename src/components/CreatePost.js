import React, {useRef} from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { firestore } from "../../db/firestore";
import { addDoc,collection } from "firebase/firestore";
import HomeScreen from "../screens/HomeScreen";


const CreatePost = ({ postText, setPostText }) => {
  const messageRef = useRef();
  const ref = collection(firestore,"post");

  const handleSave = async (e) => {
    
    e.preventDefault();
    
    console.log("post added: " + messageRef.current.value);

    let data = {
      post: messageRef.current.value,
   
     }
     
     try {
       addDoc(ref,data)
       
       
     } catch(e) {
       console.log(e);
     }
     
     
  }

  
  
  return (
    <View style={styles.postContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/Sir.jpg")}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.usernameText}>John Doe</Text>
        
        <button type="button" onClick={handleSave}>Post</button>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Create post"
        multiline
        value={postText}
        ref={messageRef}
        
        
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
