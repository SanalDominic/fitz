import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { CarouselButton } from "./Theme/Custom";

const Getotp = ({passwordSet}) => {
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Get Otp
      </Typography>
      <TextField
        fullWidth
        type="number"
        label="Enter Mobile number *"
        sx={{ mb: 2 }}
      />
      <CarouselButton fullWidth onClick={passwordSet}>
        Send Otp
      </CarouselButton>
    </>
  );
};

export default Getotp;
