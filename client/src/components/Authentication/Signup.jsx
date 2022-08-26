import React, { useState, createContext } from "react";
import Signupform from "./Signupform";
import Confirmotp from "./Confirmotp";

export const signupContext = createContext();

const Signup = ({ setToggleAuth }) => {
  const [register, setRegister] = useState(0);

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

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

  const verifyOtp = () => {
    return (
      <>
        <Confirmotp passwordSet={passwordSet} />;
      </>
    );
  };

  const stepper = (param) => {
    switch (param) {
      case 0:
        return signupForm();
      case 1:
        return verifyOtp();
      default:
        return setRegister(0);
    }
  };

  return (
    <>
      <signupContext.Provider value={{ signupData, setSignupData }}>
        {stepper(register)}
      </signupContext.Provider>
    </>
  );
};

export default Signup;
