import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

const Loginform = ({ setToggleAuth, passwordSet }) => {
  const toggle = () => {
    setToggleAuth(true);
  };

  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Login
      </Typography>
      <TextField
        fullWidth
        name="email1"
        type="email"
        label="Email Address *"
        sx={{ mb: 2 }}
      />
      <TextField name="" fullWidth type="password" label="Password *" sx={{ mb: 2 }} />
      <Box display="flex" justifyContent="end">
        <Typography
          color="GrayText"
          sx={{
            mb: 2,
            width: "fit-content",
            "&:hover": {
              color: "#000",
              cursor: "pointer",
            },
          }}
          onClick={passwordSet}
        >
          Forget your password ?
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <ModalButton sx={{ mb: 2 }}>Login</ModalButton>
        <CarouselButton onClick={toggle}>Register</CarouselButton>
      </Box>
    </>
  );
};

export default Loginform;
