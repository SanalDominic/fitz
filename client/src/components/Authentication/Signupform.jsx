import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

import { Validation } from "./Validation";
import { signupContext } from "./Signup";

import axios from "axios";
import { API } from "../../API";

const Signupform = ({ setToggleAuth, passwordSet }) => {
  const [datacorrect, setdata] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const { signupData, setSignupData } = useContext(signupContext);

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(signupData));
    setdata(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && datacorrect) {
      setFormSubmitted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  if (formSubmitted) {
    axios
      .post(`${API}/sendOtp`, {
        data: {
          email: signupData.email,
          mobile: signupData.mobile,
        },
      })
      .then((res) => {
        const { data } = res;
        console.log(res);
        if (data.otp) {
          passwordSet();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    passwordSet();
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
          error={errors.mobile ? true : false}
          fullWidth
          type="text"
          label="Mobile number *"
          sx={{ mb: 2 }}
          name="mobile"
          value={signupData.mobile}
          onChange={handleChange}
          helperText={errors.mobile && `${errors.mobile}`}
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
          label="Confirm Password *"
          sx={{ mb: 2 }}
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleChange}
          helperText={errors.confirmPassword && `${errors.confirmPassword}`}
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
          <CarouselButton onClick={() => setToggleAuth(false)}>
            Login
          </CarouselButton>
        </Box>
      </Box>
    </>
  );
};

export default Signupform;
