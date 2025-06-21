import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MUICheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAcceptTnc(e.target.checked);
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setSkills((prev) =>
      prev.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, value]
    );
    console.log("skills", skills);
  };
  return (
    <Box padding={2}>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={handleChange}
              color="secondary"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          size="large"
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
          checked={acceptTnc}
        />
      </Box>
      <Box>
        <FormControl error={!skills?.length}>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  size="small"
                  value="HTML"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  size="large"
                  value="JS"
                  checked={skills.includes("JS")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            {skills?.length || "Please select atleast one skill"}
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MUICheckbox;
