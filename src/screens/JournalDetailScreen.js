import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JournalDetailScreen = ({ route }) => {
  const { rating, content } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text>{content}</Text>
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
    backgroundColor: "#06D6A0",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 3.75,
  },
});

export default JournalDetailScreen;
