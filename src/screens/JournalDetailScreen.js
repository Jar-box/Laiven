import React from "react";
import { View, Text, StyleSheet } from "react-native";
import JournalStyles from "../JournalStyles";

const JournalDetailScreen = ({ route }) => {
  const { rating, content } = route.params;

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
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text
          style={[
            JournalStyles.ratingText,
            { backgroundColor: ratingBackgroundColor },
          ]}
        >
          {rating}
        </Text>
      </View>
      <Text style={[JournalStyles.contentText]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    gap: 6,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "500",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 3.75,
  },
});

export default JournalDetailScreen;
