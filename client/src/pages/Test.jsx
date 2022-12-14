import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
     Accordion,
     AccordionDetails,
     AccordionSummary,
     Typography,
} from "@mui/material";

import { v4 as uuidv4 } from "uuid";

const sizes = ["XS", "S", "M", "L", "XL"];

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

const Test = () => {
     const [size, setSize] = useState([]);
     console.log(size);
     const [expanded, setExpanded] = useState({ panel1: true, panel2: true });

     const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(
               isExpanded
                    ? { ...expanded, [`${panel}`]: true }
                    : { ...expanded, [`${panel}`]: false }
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

export default Test;
