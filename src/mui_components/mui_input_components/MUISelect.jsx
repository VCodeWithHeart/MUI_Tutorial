import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";

const MUISelect = () => {
  const [countries, setCountries] = useState([]);
  const [car, setCar] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setCountries(value);
    console.log("countries", countries);
  };

  const handleCarChange = (e) => {
    const { value } = e.target;
    setCar(value);
    console.log(car);
  };

  return (
    <Box width="250px">
      <Typography color="blue" variant="h6" padding={1}>
        MUISelect
      </Typography>
      <TextField
        sx={{ padding: "5px" }}
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText={
          countries?.length ? "" : "please select atleast one country"
        }
        error={!countries?.length}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      <Stack>
        <Select value={car || ""} onChange={handleCarChange} multiple>
          <MenuItem value="Bugatti">Bugatti</MenuItem>
          <MenuItem value="Lamborghini">Lamborghini</MenuItem>
          <MenuItem value="BMW">BMW</MenuItem>
        </Select>
      </Stack>
    </Box>
  );
};

export default MUISelect;
