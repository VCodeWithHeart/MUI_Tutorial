import { FavoriteRounded, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import Favorites from "../../components/Favourites";
import Profile from "../../components/Profile";
import About from "../../components/About";
import HomePage from "../../components/Home";

const MUIBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const renderPage = () => {
    switch (value) {
      case 0:
        return <HomePage />;
      case 1:
        return <Favorites />;
      case 2:
        return <Profile />;
      default:
        return <About />;
    }
  };
  return (
    <>
      <Box>{renderPage()}</Box>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favourite" icon={<FavoriteRounded />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </>
  );
};

export default MUIBottomNavigation;
