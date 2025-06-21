import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Edit } from "@mui/icons-material";

const MUISpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
};

export default MUISpeedDial;
