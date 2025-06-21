import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

const MUIChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chip) => {
    setChips(chips?.filter((currentChip) => currentChip !== chip));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        icon={<Face />}
        label="chip outlined"
        color="secondary"
        size="small"
      />
      <Chip label="chip" color="primary" size="large" variant="outlined" />
      <Chip
        label="Carmella"
        color="error"
        variant="outlined"
        avatar={
          <Avatar src="https://randomuser.me/api/portraits/women/57.jpg" />
        }
      />
      <Chip label="Click" color="success" onClick={() => alert("clicked")} />
      <Chip label="Delete" color="error" onDelete={() => alert("Deleted")} />

      {chips?.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MUIChip;
