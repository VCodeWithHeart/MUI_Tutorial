import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MUITextField = () => {
  const [value, setvalue] = useState("");
  const [visible, setvisible] = useState(false);
  const handleVisibility = () => {
    setvisible(!visible);
  };
  return (
    <Stack margin={4} spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Username"
          variant="outlined"
          onChange={(e) => setvalue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Create a unique username"}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          size="medium"
          required
          color="error"
          type={visible ? "text" : "password"}
          helperText="Do not share your password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleVisibility}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Address"
          size="medium"
          required
          color="warning"
          placeholder="Enter address"
        />
        <TextField
          size="medium"
          required
          color="success"
          type="number"
          value={18}
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="Amount"
          size="medium"
          required
          color="primary"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          size="medium"
          required
          color="primary"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
