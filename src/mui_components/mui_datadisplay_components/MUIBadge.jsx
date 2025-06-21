import { Mail, Notifications } from "@mui/icons-material";
import { Avatar, Badge, Stack } from "@mui/material";

const MUIBadge = () => {
  return (
    <Stack spacing={2} margin={2} direction="row">
      <Badge badgeContent={"Hey!"} color="success">
        <Avatar
          src="https://randomuser.me/api/portraits/women/19.jpg"
          sx={{ width: 64, height: 64 }}
        />
      </Badge>
      <Badge badgeContent={101} max={99} color="error" showZero>
        <Notifications />
      </Badge>
      <Badge variant="dot" max={99} color="primary" invisible>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MUIBadge;
