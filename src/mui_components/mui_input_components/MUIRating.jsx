import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MUIRating = () => {
  const [value, setValue] = useState(3.5);
  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log("value", value);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MUIRating;
