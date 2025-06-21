import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MUISwitch = () => {
  const [checkedLocations, setCheckedLocations] = useState({
    Singapore: false,
    Russia: false,
    Paris: false,
    Switzerland: false,
    Shimla: false,
    Manali: false,
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckedLocations((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log("checkedLocations", checkedLocations);
  };

  return (
    <Box padding={2}>
      <Typography variant="h5" padding={1}>
        Choose Holiday Location Prefernces
      </Typography>
      <FormGroup>
        <FormControlLabel
          label="Singapore"
          name="Singapore"
          control={
            <Switch
              checked={checkedLocations?.Singapore}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Russia"
          name="Russia"
          control={
            <Switch
              checked={checkedLocations?.Russia}
              onChange={handleChange}
              size="small"
              color="warning"
            />
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Paris"
          name="Paris"
          control={
            <Switch
              checked={checkedLocations?.Paris}
              onChange={handleChange}
              size="small"
              color="error"
            />
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Switzerland"
          name="Switzerland"
          control={
            <Switch
              checked={checkedLocations?.Switzerland}
              onChange={handleChange}
              size="small"
              color="primary"
            />
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Shimla"
          name="Shimla"
          control={
            <Switch
              checked={checkedLocations?.Shimla}
              onChange={handleChange}
              color="secondary"
            />
          }
        ></FormControlLabel>
        <FormControlLabel
          label="Manali"
          name="Manali"
          control={
            <Switch
              checked={checkedLocations?.Manali}
              onChange={handleChange}
              color="info"
            />
          }
        ></FormControlLabel>
      </FormGroup>
    </Box>
  );
};

export default MUISwitch;
