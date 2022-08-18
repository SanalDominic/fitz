import React, { useState } from "react";
import Signupform from "./Signupform";
import Getotp from "./Getotp";
import Confirmotp from "./Confirmotp";

const Signup = ({ setToggleAuth }) => {
  const [register, setRegister] = useState(0);
  const passwordSet = () => {
    setRegister(1 + register);
  };

  const signupForm = () => {
    return (
      <>
        <Signupform setToggleAuth={setToggleAuth} passwordSet={passwordSet} />
      </>
    );
  };

  const getOtp = () => {
    return (
      <>
        <Getotp passwordSet={passwordSet} />;
      </>
    );
  };

  const verifyOtp = () => {
    return (
      <>
        <Confirmotp passwordSet={passwordSet} />;
      </>
    );
  };

  return (
    <>
      {register === 0
        ? signupForm()
        : register === 1
        ? getOtp()
        : register === 2
        ? verifyOtp()
        : setRegister(0)}
    </>
  );
};

export default Signup;
