import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { CarouselButton } from "../Theme/Custom";

import { authContext } from "../Navbar/AccountMenu";
import { API } from "../../API";
import axios from "axios";

const Signupotp = () => {
  const { signupData } = useContext(authContext);
  const [error, setError] = useState({});
  const [otp, setOtp] = useState("");
  const [data, setData] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!otp) {
      errors.otp = "Please enter otp";
    } else if (!(otp.length === 4)) {
      errors.otp = "Otp should be of 4 numbers";
    }
    setError(errors);
    setData(true);
  };
  const verifyOtp = () => {
    axios
      .post(`${API}/verifyOtp`, {
        ...signupData,
        otp,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("er", error.message);
      });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && data) {
      verifyOtp();
    }
  }, [error]);

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
      <TextField
        fullWidth
        type="number"
        name="otp"
        value={otp}
        onChange={handleChange}
        helperText={error.otp && `${error.otp}`}
        label="Enter otp *"
        sx={{ mb: 2 }}
      />
      <CarouselButton fullWidth onClick={hadleSubmit}>
        Verify
      </CarouselButton>
    </>
  );
};
export default Signupotp;
