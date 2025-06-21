import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

const TextFormattingToggleButton = () => {
  const [buttonState, setButtonState] = useState("");
  console.log(buttonState);
  return (
    <>
      <ToggleButtonGroup
        value={buttonState}
        exclusive
        onChange={(e, newValue) => setButtonState(newValue)}
      >
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default TextFormattingToggleButton;
