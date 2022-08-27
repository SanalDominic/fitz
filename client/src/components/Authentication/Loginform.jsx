import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { CarouselButton, ModalButton } from "../Theme/Custom";
import { authContext } from "../Navbar/AccountMenu";

const Loginform = ({ stepperInc }) => {
  const { setToggleAuth } = useContext(authContext);

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
      <TextField
        name=""
        fullWidth
        type="password"
        label="Password *"
        sx={{ mb: 2 }}
      />
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
          onClick={stepperInc}
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
        <CarouselButton onClick={() => setToggleAuth(true)}>
          Register
        </CarouselButton>
      </Box>
    </>
  );
};

export default Loginform;
