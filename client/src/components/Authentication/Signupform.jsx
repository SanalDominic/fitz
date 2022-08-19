import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

const Signupform = ({ setToggleAuth, passwordSet }) => {
  const toggle = () => {
    setToggleAuth(false);
  };

  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Register
      </Typography>
      <TextField fullWidth type="text" label="Full name *" sx={{ mb: 2 }} />
      <TextField
        fullWidth
        type="email"
        label="Email Address *"
        sx={{ mb: 2 }}
      />
      <TextField fullWidth type="password" label="Password *" sx={{ mb: 2 }} />
      <TextField
        fullWidth
        type="number"
        label="Mobile number *"
        sx={{ mb: 2 }}
      />
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <ModalButton onClick={passwordSet} sx={{ mb: 2 }}>
          Register
        </ModalButton>
        <CarouselButton onClick={toggle}>Login</CarouselButton>
      </Box>
    </>
  );
};

export default Signupform;
