import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ModalButton } from "../Theme/Custom";
import { authContext } from "../Navbar/AccountMenu";

import axios from "axios";
import { API } from "../../API";
import { loginValidation } from "./Validation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Loginform = ({ stepperInc }) => {
  const navigate = useNavigate();
  const { setToggleAuth, setModalOpen } = useContext(authContext);

  const [data, setData] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidation(loginData));
    setData(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && data) {
      axios
        .post(`${API}/login`, {
          ...loginData,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setModalOpen(false);
            toast.success("SignedIn Successfully !");
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            toast.error("Invalid Credentials ! Try again");
            setLoginData({ email: "", password: "" });
          } else {
            console.log(error.message);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 4 }} color="initial">
        Login
      </Typography>
      <TextField
        autoFocus
        error={errors.email ? true : false}
        fullWidth
        name="email"
        type="email"
        label="Email Address *"
        sx={{ mb: 2 }}
        value={loginData.email}
        onChange={handleChange}
        helperText={errors.email && `${errors.email}`}
      />
      <TextField
        error={errors.password ? true : false}
        fullWidth
        type="password"
        label="Password *"
        sx={{ mb: 1 }}
        name="password"
        value={loginData.password}
        onChange={handleChange}
        helperText={errors.password && `${errors.password}`}
      />
      <Box display="flex">
        <Typography
          color="GrayText"
          sx={{
            mb: 5,
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
        <ModalButton sx={{ mb: 3 }} onClick={handleSubmit}>
          Login
        </ModalButton>
        <Typography variant="subtitle1" color="initial">
          <span style={{ color: "GrayText" }}>Don't have an account ?</span>{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setToggleAuth(true)}
          >
            Signup
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default Loginform;
