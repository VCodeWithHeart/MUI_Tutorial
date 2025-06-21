import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useState } from "react";

const MUIImageList = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Space X",
    },
    {
      img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Friends Playing",
    },
    {
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "PCB",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Code & Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jogging",
    },
    {
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Online Shopping",
    },
    {
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fitness",
    },
    {
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Workspace",
    },
    {
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web Development",
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Team Meeting",
    },
    {
      img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blogging",
    },
  ];

  const beautifulImages = [
    {
      img: "https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg",
      title: "Dirt Bike Rider",
    },
    {
      img: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      title: "Majestic Mountain Reflections",
    },
    {
      img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg",
      title: "Snowy Winter Landscape",
    },
    {
      img: "https://images.pexels.com/photos/27861834/pexels-photo-27861834/free-photo-of-a-narrow-street-with-buildings-and-people-walking.jpeg",
      title: "Narrow Street with Building",
    },
    {
      img: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg",
      title: "Women with Dumbbell",
    },
    {
      img: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
      title: "Vibrant Sunset Over Mountains",
    },

    {
      img: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg",
      title: "Country Road at Dusk",
    },
    {
      img: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg",
      title: "Mountain Road Under Dramatic Sky",
    },
    {
      img: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg",
      title: "Sunset Over Mountain Ridge",
    },
    {
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
      title: "Scenic Coastal Path",
    },
    {
      img: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
      title: "Waterfall with Mountain Backdrop",
    },
    {
      img: "https://images.pexels.com/photos/29213973/pexels-photo-29213973/free-photo-of-picturesque-village-with-foggy-morning-landscape.jpeg",
      title: "Village with Foggy Morning Landscape",
    },
  ];

  const [itemClicked, setItemClicked] = useState({});

  const handleClick = (title) => {
    setItemClicked((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  console.log("itemClicked", itemClicked);

  return (
    <Stack margin={4} spacing={4} direction="row">
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((cur) => (
          <ImageListItem key={cur.img}>
            <img
              src={`${cur.img}?w=164&h=1648fit=crop&auto=format&dpr=2`}
              alt={cur.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={cur.title}
              actionPosition="right"
              subtitle={`by ${cur.title.split(" ")[0]}`}
              actionIcon={
                <IconButton onClick={() => handleClick(cur.title)}>
                  {itemClicked[cur.title] ? (
                    <ThumbUpAltIcon sx={{ color: "white" }} />
                  ) : (
                    <ThumbUpOffAltIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {beautifulImages.map((cur) => (
            <ImageListItem key={cur.img}>
              <img
                src={`${cur.img}?auto=format&dpr=2`}
                alt={cur.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MUIImageList;
