import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import JournalStyles from "../JournalStyles";

const JournalEntry = ({ date, rating, content, onPress }) => {
  let ratingBackgroundColor = "";
  switch (rating) {
    case "Positive":
      ratingBackgroundColor = "#38FF88";
      break;
    case "Moderate":
      ratingBackgroundColor = "#EFB258";
      break;
    case "Harsh":
      ratingBackgroundColor = "#DB836D";
      break;
    default:
      ratingBackgroundColor = "#CB8CDA";
  }

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles.container, pressed && styles.containerPressed]}>
          <View style={styles.dateRatingContainer}>
            <Text style={JournalStyles.dateText}>{date}</Text>
            <Text
              style={[
                JournalStyles.ratingText,
                { backgroundColor: ratingBackgroundColor },
              ]}
            >
              {rating}
            </Text>
          </View>
          <Text style={[JournalStyles.contentText, styles.contentText]}>
            {content}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  dateRatingContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 4,
  },
  containerPressed: {
    backgroundColor: "#E5E5E5",
  },
  contentText: {
    opacity: 0.5,
  },
});

export default JournalEntry;
