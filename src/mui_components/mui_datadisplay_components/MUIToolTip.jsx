import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const MUIToolTip = () => {
  return (
    <Box padding={10}>
      <Tooltip title="Delete" placement="top" arrow enterDelay={500} leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MUIToolTip;
