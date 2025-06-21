import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const MUITabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "600px",
          }}
        >
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<StarIcon />}
              iconPosition="start"
            />
            <Tab
              label="Tab Two"
              value="2"
              icon={<FavoriteIcon />}
              iconPosition="bottom"
              disabled
            />
            <Tab
              label="Tab Three"
              value="3"
              icon={<BedtimeIcon />}
              iconPosition="end"
            />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>

        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
        <TabPanel value="4">Panel four</TabPanel>
        <TabPanel value="5">Panel five</TabPanel>
        <TabPanel value="6">Panel six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MUITabs;
