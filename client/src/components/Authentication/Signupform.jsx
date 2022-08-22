import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

import { API } from "../../API";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  validFullName,
  validEmail,
  // validPassword,
  // validConfirmPassword,
  // validMobile,
} from "./regex/Validation";

const Signupform = ({ setToggleAuth, passwordSet }) => {
  const [signupData, setSignupData] = useState({});

  //error validation
  const [error, setError] = useState({});

  const toggle = () => {
    setToggleAuth(false);
  };

  useEffect(() => {
    Validate();
  }, [signupData]);

  const Validate = () => {
    if (signupData.fullName) {
      if (!validFullName.test(signupData.fullName)) {
        setError({ ...error, fullName: "Enter a valid Name" });
      } else {
        setError({ ...error, fullName: "" });
      }
    }
    if (signupData.email) {
      if (!validEmail.test(signupData.email)) {
        setError({ ...error, email: "Enter a valid Name" });
      } else {
        setError({ ...error, email: "" });
      }
    }
  };

  // const signupFormData = () => {
  //   if (signupData.password === signupData.confirmPassword) {
  //     axios
  //       .post(`${API}/signup`, {
  //         signupData,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

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
      <TextField
        error={error.fullName ? true : false}
        fullWidth
        type="text"
        label={!error.fullName ? "Full name *" : "Error"}
        sx={{ mb: 2 }}
        value={signupData.fullName}
        onChange={(e) =>
          setSignupData({ ...signupData, fullName: e.target.value })
        }
        helperText={error.fullName && error.fullName}
      />

      <TextField
        fullWidth
        type="email"
        label={!error.fullName ? "Email Address *" : "Error"}
        sx={{ mb: 2 }}
        value={signupData.email}
        onChange={(e) =>
          setSignupData({ ...signupData, email: e.target.value })
        }
      />
      <TextField
        fullWidth
        type="password"
        label="Password *"
        sx={{ mb: 2 }}
        value={signupData.password}
        onChange={(e) => {
          setSignupData({ ...signupData, password: e.target.value });
        }}
      />
      <TextField
        fullWidth
        type="password"
        label="Re-enter Password *"
        sx={{ mb: 2 }}
        value={signupData.confirmPassword}
        onChange={(e) => {
          setSignupData({
            ...signupData,
            confirmPassword: e.target.value,
          });
        }}
      />
      <TextField
        fullWidth
        type="number"
        label="Mobile number *"
        sx={{ mb: 2 }}
        value={signupData.mobile}
        onChange={(e) => {
          setSignupData({ ...signupData, mobile: e.target.value });
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <ModalButton onClick={Validate} sx={{ mb: 2 }}>
          Register
        </ModalButton>
        <CarouselButton onClick={toggle}>Login</CarouselButton>
      </Box>
    </>
  );
};

export default Signupform;
