import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MUICard = () => {
  return (
    <Box width="300px" margin={2}>
      <Typography color="success.dark">MUI CARD</Typography>

      <Card elevation={2}>
        <Box sx={{ height: 140, overflow: "hidden" }}>
          <CardMedia
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
            image="https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cybercity"
          />
        </Box>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="info.dark"
          >
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            repellat, dolorem voluptatem dignissimos maxime nisi velit
            aspernatur iste non suscipit nesciunt molestiae ab! Atque,
            exercitationem est!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MUICard;
