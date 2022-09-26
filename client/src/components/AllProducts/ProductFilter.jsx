import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
     Accordion,
     AccordionDetails,
     AccordionSummary,
     Typography,
} from "@mui/material";

import { v4 as uuidv4 } from "uuid";

const colors = ["gray", "black", "red", "green", "violet", "yellow"];
const sizes = ["XS", "S", "M", "L", "XL"];

const BpIcon = styled("span")(({ theme }) => ({
     width: "16px",
     height: "16px",
     "&:hover": { backgroundColor: "transparent" },
}));

function ColorCheckBox(props) {
     return (
          <Checkbox
               sx={{ marginRight: "3px" }}
               disableRipple
               color="default"
               checkedIcon={
                    <DoneOutlinedIcon
                         sx={{ color: "#fff", width: "16px", height: "16px" }}
                    />
               }
               icon={<BpIcon />}
               {...props}
          />
     );
}

function SizeCheckbox(props) {
     return (
          <Checkbox
               disableRipple
               sx={{
                    backgroundColor: "white",
                    border: "1px solid gray",
                    marginRight: "3px",
                    marginBottom: "3px",
                    width: "34px",
                    height: "34px",
                    borderRadius: "unset",
               }}
               {...props}
          />
     );
}

const ProductFilter = () => {
     const [color, setColor] = useState([]);
     const [size, setSize] = useState([]);

     const [expanded, setExpanded] = useState({ panel1: true, panel2: true });

     const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(
               isExpanded
                    ? { ...expanded, [`${panel}`]: true }
                    : { ...expanded, [`${panel}`]: false }
          );
     };

     const handleColorChange = (event) => {
          const index = color.indexOf(event.target.value);

          setColor(
               index === -1
                    ? [...color, event.target.value]
                    : color.filter((color) => color !== event.target.value)
          );
     };

     const handleSizeChange = (event) => {
          const index = size.indexOf(event.target.value);

          setSize(
               index === -1
                    ? [...size, event.target.value]
                    : size.filter((size) => size !== event.target.value)
          );
     };

     return (
          <>
               <Accordion
                    expanded={expanded.panel1}
                    onChange={handleChange("panel1")}
               >
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1bh-content"
                         id="panel1bh-header"
                    >
                         <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Colors
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         {colors.map((item) => {
                              return (
                                   <ColorCheckBox
                                        key={uuidv4()}
                                        sx={{
                                             backgroundColor: `${item}`,
                                             marginRight: "3px",
                                             marginBottom: "3px",
                                        }}
                                        value={`${item}`}
                                        checked={color.includes(`${item}`)}
                                        onChange={handleColorChange}
                                   />
                              );
                         })}
                    </AccordionDetails>
               </Accordion>
               <Accordion
                    expanded={expanded.panel2}
                    onChange={handleChange("panel2")}
               >
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1bh-content"
                         id="panel1bh-header"
                    >
                         <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Colors
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         {sizes.map((item) => {
                              return (
                                   <SizeCheckbox
                                        key={uuidv4()}
                                        icon={<Typography>{item}</Typography>}
                                        checkedIcon={
                                             <Typography>{item}</Typography>
                                        }
                                        value={`${item}`}
                                        checked={size.includes(`${item}`)}
                                        onChange={handleSizeChange}
                                   />
                              );
                         })}
                    </AccordionDetails>
               </Accordion>
          </>
     );
};

export default ProductFilter;
