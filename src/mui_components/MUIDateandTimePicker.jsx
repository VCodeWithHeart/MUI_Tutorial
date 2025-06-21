import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";

const MUIDateandTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  console.log("selectedDate", selectedDate);
  console.log("selectedTime", selectedTime?.toLocaleTimeString());
  console.log("selectedDateTime", selectedDateTime);

  return (
    <Stack margin={4} spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />

      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />

      <DateTimePicker
        label="Date Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MUIDateandTimePicker;
