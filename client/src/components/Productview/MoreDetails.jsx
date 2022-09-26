import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import TabPanel from "@mui/lab/TabPanel";

import DressDetail from "./DressDetail";
import Reviews from "./Reviews";

const MoreDetails = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1", pt: 4 }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="Details" value="1" />
            <Tab label="Reviews" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DressDetail />
        </TabPanel>
        <TabPanel value="2">
          <Reviews />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MoreDetails;
