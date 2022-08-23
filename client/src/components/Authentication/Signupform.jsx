import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { CarouselButton, ModalButton } from "../Theme/Custom";

// import { API } from "../../API";
// import axios from "axios";
import { useState } from "react";
import {
  validFullName,
  validEmail,
  validPassword,
  validMobile,
} from "./regex/Validation";

const Signupform = ({ setToggleAuth, passwordSet }) => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  //error validation
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const toggle = () => {
    setToggleAuth(false);
  };

  const Validate = () => {
    const newErrors = {};

    if (!signupData.fullName || !validFullName.test(signupData.fullName)) {
      newErrors["fullName"] = true;
    } else {
      newErrors["fullName"] = false;
    }

    if (!signupData.email || !validEmail.test(signupData.email)) {
      newErrors["email"] = true;
    } else {
      newErrors["email"] = false;
    }

    if (!signupData.password || !validPassword.test(signupData.password)) {
      newErrors["password"] = true;
    } else {
      newErrors["password"] = false;
    }

    if (
      !(signupData.password === signupData.confirmPassword) ||
      !signupData.confirmPassword
    ) {
      newErrors["confirmPassword"] = true;
    } else {
      newErrors["confirmPassword"] = false;
    }

    if (!signupData.mobile || !validMobile.test(signupData.mobile)) {
      newErrors["mobile"] = true;
    } else {
      newErrors["mobile"] = false;
    }

    setError(newErrors);

    // const isNullish = Object.values(error).every((value) => {
    //   if (value === null) {
    //     return true;
    //   }
    //   return false;
    // });
    // console.log(isNullish);
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
      <Box>
        <TextField
          autoFocus
          error={error.fullName ? true : false}
          fullWidth
          name="fullName"
          type="text"
          label={error.fullName ? "Error" : "Full name *"}
          sx={{ mb: 2 }}
          value={signupData.fullName}
          onChange={(e) =>
            setSignupData({ ...signupData, fullName: e.target.value })
          }
          helperText={error.fullName && "Please enter a valid name"}
        />

        <TextField
          error={error.email ? true : false}
          fullWidth
          name="email"
          type="email"
          label={error.email ? "Error" : "Email Address *"}
          sx={{ mb: 2 }}
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
          helperText={error.email && "Please enter a valid email"}
        />

        <TextField
          error={error.password ? true : false}
          fullWidth
          type="password"
          label={error.password ? "Error" : "Password *"}
          sx={{ mb: 2 }}
          value={signupData.password}
          onChange={(e) => {
            setSignupData({ ...signupData, password: e.target.value });
          }}
          helperText={
            error.password &&
            "Password should have 1.length 8 2.numbers 3.Atleast one Capital letter 4.a special character "
          }
        />

        <TextField
          error={error.confirmPassword ? true : false}
          fullWidth
          type="password"
          label={error.confirmPassword ? "Error" : "Re-enter Password *"}
          sx={{ mb: 2 }}
          value={signupData.confirmPassword}
          onChange={(e) => {
            setSignupData({
              ...signupData,
              confirmPassword: e.target.value,
            });
          }}
          helperText={error.confirmPassword && "password mismatch"}
        />

        <TextField
          error={error.mobile ? true : false}
          fullWidth
          type="number"
          label={error.mobile ? "Error" : "Mobile number *"}
          sx={{ mb: 2 }}
          value={signupData.mobile}
          onChange={(e) => {
            setSignupData({ ...signupData, mobile: e.target.value });
          }}
          helperText={error.mobile && "Mobile number contains 10 digits"}
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
      </Box>
    </>
  );
};

export default Signupform;
