import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CarouselButton, ModalButton } from "../Theme/Custom";
import { authContext } from "../Navbar/AccountMenu";

import axios from "axios";
import { API } from "../../API";
import { loginValidation } from "./Validation";
import { useNavigate } from "react-router-dom";

const Loginform = ({ stepperInc }) => {
  const navigate = useNavigate();
  const { setToggleAuth, setModalOpen } = useContext(authContext);

  const [data, setData] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState(false);

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
          if (response.status === 200 && response.data.user) {
            setModalOpen(false);
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            setLogin(true);
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
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3 }}
        color="initial"
      >
        Login
      </Typography>
      <Typography textAlign="center" variant="subtitle1" color="red" mb={2}>
        {login && "Invalid Credentials ! Try again"}
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
        sx={{ mb: 2 }}
        name="password"
        value={loginData.password}
        onChange={handleChange}
        helperText={errors.password && `${errors.password}`}
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
        <ModalButton sx={{ mb: 2 }} onClick={handleSubmit}>
          Login
        </ModalButton>
        <CarouselButton onClick={() => setToggleAuth(true)}>
          Register
        </CarouselButton>
      </Box>
    </>
  );
};

export default Loginform;
