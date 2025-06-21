import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MUILists = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Badge badgeContent={10} max={9} color="success">
                  <Avatar src="https://randomuser.me/api/portraits/men/96.jpg" />
                </Badge>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="Mark Watt" secondary="Hey, What's up" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Badge variant="dot" color="success">
                  <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" />
                </Badge>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="Keiley Smith"
              secondary="See you tomorrow!"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Badge variant="dot" color="error">
                  <Avatar src="https://randomuser.me/api/portraits/women/55.jpg" />
                </Badge>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="Michelle Johnson"
              secondary="Have a nice trip"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MUILists;
