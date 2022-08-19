import React, { useState } from "react";

//import FormHelperText from "@mui/material/FormHelperText";

import Loginform from "./Loginform";
import Getotp from "./Getotp";
import Confirmotp from "./Confirmotp";
import Changepassword from "./Changepassword";

const Login = ({ setToggleAuth }) => {
  const [changePassword, setChangePassword] = useState(0);

  const passwordSet = () => {
    setChangePassword(1 + changePassword);
  };

  const loginForm = () => {
    return (
      <>
        <Loginform setToggleAuth={setToggleAuth} passwordSet={passwordSet} />
      </>
    );
  };

  const getOtp = () => {
    return (
      <>
        <Getotp passwordSet={passwordSet} />
      </>
    );
  };

  const verifyOtp = () => {
    return (
      <>
        <Confirmotp passwordSet={passwordSet} />
      </>
    );
  };

  const newPassword = () => {
    return (
      <>
        <Changepassword passwordSet={passwordSet} />
      </>
    );
  };

  return (
    <>
      {changePassword === 0
        ? loginForm()
        : changePassword === 1
        ? getOtp()
        : changePassword === 2
        ? verifyOtp()
        : changePassword === 3
        ? newPassword()
        : setChangePassword(0)}
    </>
  );
};

export default Login;
