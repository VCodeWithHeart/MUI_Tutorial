import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MUIRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error={!value} required>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Please Select Atleast One Option</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MUIRadioButton;
