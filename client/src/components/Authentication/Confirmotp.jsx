import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { CarouselButton } from "../Theme/Custom";

const Confirmotp = ({ passwordSet }) => {
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Verify Otp
      </Typography>
      <TextField fullWidth type="number" label="Enter otp *" sx={{ mb: 2 }} />
      <CarouselButton fullWidth onClick={passwordSet}>
        Verify
      </CarouselButton>
    </>
  );
};

export default Confirmotp;
