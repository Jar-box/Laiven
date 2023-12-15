import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const JournalEntry = ({ date, rating, content, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.dateRatingContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <Text style={styles.contentText}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  dateRatingContainer: {
    flexDirection: "row",
    gap: 10,
  },
  dateText: {
    fontWeight: "500",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "500",
    backgroundColor: "#06D6A0",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 3.75,
  },
  contentText: {
    color: "#998591",
  },
});

export default JournalEntry;
