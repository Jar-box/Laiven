import React, { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateSelect = (date) => {
    // Handle date selection logic here
    // You can use this function to update the state or perform any other action
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [date.dateString]: {
        selected: true,
        selectedColor: "#CF22FF", // Customize the color of selected dates
      },
    }));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Calendar
        current={"2023-12-01"} // Set the initial visible month
        markedDates={selectedDates} // Marked dates for customization
        onDayPress={(day) => handleDateSelect(day)}
      />
    </View>
  );
};

export default CalendarScreen;
