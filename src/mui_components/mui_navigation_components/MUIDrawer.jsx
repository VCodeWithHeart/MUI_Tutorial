import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const MUIDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        aria-label="logo"
        color="inherit"
        edge="start"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MUIDrawer;
