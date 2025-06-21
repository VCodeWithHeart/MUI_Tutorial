import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MUIMasonry = () => {
  return (
    <Box margin={4} width="500px">
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MUIMasonry;
