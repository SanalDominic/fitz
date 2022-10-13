import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ModalButton } from "../Theme/Custom";
import { signupValidation } from "./Validation";
import { authContext } from "../Navbar/AccountMenu";

import axios from "axios";
import { API } from "../../API";

const Signupform = ({ stepperInc }) => {
     const [data, setdata] = useState(false);
     const [formSubmitted, setFormSubmitted] = useState(false);
     const [errors, setErrors] = useState({});
     const { setToggleAuth, signupData, setSignupData } =
          useContext(authContext);

     const handleChange = (e) => {
          setSignupData({
               ...signupData,
               [e.target.name]: e.target.value,
          });
     };

     const hadleSubmit = (e) => {
          e.preventDefault();
          setErrors(signupValidation(signupData));
          setdata(true);
     };

     useEffect(() => {
          if (Object.keys(errors).length === 0 && data) {
               setFormSubmitted(true);
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [errors]);

     if (formSubmitted) {
          axios.post(`${API}/sendOtp`, {
               data: {
                    email: signupData.email,
                    mobile: signupData.mobile,
               },
          })
               .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                         stepperInc();
                    }
               })
               .catch((error) => {
                    console.log(error);
                    if (error.response.status === 409) {
                         setFormSubmitted(false);
                         setToggleAuth(true);
                    } else {
                         console.log(error.message);
                    }
               });
     }

     return (
          <>
               <Typography variant="h4" sx={{ mb: 3 }} color="initial">
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
                         helperText={
                              errors.confirmPassword &&
                              `${errors.confirmPassword}`
                         }
                    />

                    <Box
                         sx={{
                              display: "flex",
                              flexFlow: "column",
                         }}
                    >
                         <ModalButton
                              onClick={hadleSubmit}
                              sx={{ mt: 2, mb: 3 }}
                         >
                              Register
                         </ModalButton>
                         <Typography variant="subtitle1" color="initial">
                              <span style={{ color: "GrayText" }}>
                                   Already have an account ?
                              </span>{" "}
                              <span
                                   style={{ cursor: "pointer" }}
                                   onClick={() => setToggleAuth(false)}
                              >
                                   Login
                              </span>
                         </Typography>
                    </Box>
               </Box>
          </>
     );
};

export default Signupform;
