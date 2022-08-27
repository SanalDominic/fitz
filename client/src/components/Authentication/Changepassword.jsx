import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { CarouselButton } from "../Theme/Custom";

const Changepassword = ({ stepperInc }) => {
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Set New Password
      </Typography>
      <TextField
        fullWidth
        type="password"
        label="New Password *"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        type="password"
        label="Re-enter Password *"
        sx={{ mb: 2 }}
      />
      <CarouselButton fullWidth onClick={stepperInc}>
        Submit
      </CarouselButton>
    </>
  );
};

export default Changepassword;
