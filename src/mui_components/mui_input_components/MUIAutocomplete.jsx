import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const movies = ["Ra.One", "Dhoom", "Krrish", "Haunted 3D", "Sholay"];
const moviesObj = movies.map((label, id) => ({
  id: id + 1,
  label,
  category: ["Ra.One", "Krrish"].includes(label)
    ? "Sci/Action"
    : "Haunted 3D" === label
    ? "Horror/Mystery"
    : "Action/Thriller",
}));

const MUIAutocomplete = () => {
  const [value, setValue] = useState("" || null);
  const [moviesVal, setMoviesVal] = useState([]);
  console.log("value", value);
  console.log("moviesVal", moviesVal);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        freeSolo
        options={movies}
        value={value}
        renderInput={(params) => <TextField {...params} label="Movies" />}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Autocomplete
        getOptionLabel={(moviesObj) => moviesObj.label} // optional
        multiple
        groupBy={(moviesObj) => moviesObj?.category}
        options={moviesObj.sort(
          (a, b) => -b.category.localeCompare(a.category)
        )}
        value={moviesVal}
        renderInput={(params) => <TextField {...params} label="Movies" />}
        onChange={(e, newValue) => setMoviesVal(newValue)}
      />
    </Stack>
  );
};

export default MUIAutocomplete;
