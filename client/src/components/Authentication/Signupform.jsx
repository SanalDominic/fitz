import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

import { API } from "../../API";
import axios from "axios";

import Useform from "./Useform";

const Signupform = ({ setToggleAuth, passwordSet }) => {
  const toggle = (e) => {
    setToggleAuth(false);
  };
  const { handleChange, hadleSubmit, signupData, errors, formSubmitted } =
    Useform();

  if (formSubmitted) {
    axios
      .post(`${API}/sendOtp`, {
        data: {
          email: signupData.email,
          mobile: signupData.mobile,
        },
      })
      .then((res) => {
        console.log(res.data);
        const { data } = res;
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

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
      <Box>
        <TextField
          autoFocus
          error={errors.fullName ? true : false}
          fullWidth
          name="fullName"
          type="text"
          label="Full name *"
          sx={{ mb: 2 }}
          value={signupData.fullName}
          onChange={handleChange}
          helperText={errors.fullName && `${errors.fullName}`}
        />

        <TextField
          error={errors.email ? true : false}
          fullWidth
          name="email"
          type="email"
          label="Email Address *"
          sx={{ mb: 2 }}
          value={signupData.email}
          onChange={handleChange}
          helperText={errors.email && `${errors.email}`}
        />
        <TextField
          error={errors.password ? true : false}
          fullWidth
          type="password"
          label="Password *"
          sx={{ mb: 2 }}
          name="password"
          value={signupData.password}
          onChange={handleChange}
          helperText={errors.password && `${errors.password}`}
        />
        <TextField
          error={errors.confirmPassword ? true : false}
          fullWidth
          type="password"
          label="re enter Password *"
          sx={{ mb: 2 }}
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleChange}
          helperText={errors.confirmPassword && `${errors.confirmPassword}`}
        />
        <TextField
          error={errors.mobile ? true : false}
          fullWidth
          type="text"
          label="Enter mobile number *"
          sx={{ mb: 2 }}
          name="mobile"
          value={signupData.mobile}
          onChange={handleChange}
          helperText={errors.mobile && `${errors.mobile}`}
        />

        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <ModalButton onClick={hadleSubmit} sx={{ mb: 2 }}>
            Register
          </ModalButton>
          <CarouselButton onClick={toggle}>Login</CarouselButton>
        </Box>
      </Box>
    </>
  );
};

export default Signupform;
