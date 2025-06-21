import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MUIAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panelNo) => {
    setExpanded(isExpanded ? panelNo : false);
  };
  return (
    <Box margin={2}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            expedita adipisci, a unde, nostrum labore quibusdam illum, voluptas
            explicabo neque deserunt at delectus molestias vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
          expanded={expanded === "panel3"}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            expedita adipisci, a unde, nostrum labore quibusdam illum, voluptas
            explicabo neque deserunt at delectus molestias vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            expedita adipisci, a unde, nostrum labore quibusdam illum, voluptas
            explicabo neque deserunt at delectus molestias vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MUIAccordion;
