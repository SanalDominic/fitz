import React, { useState } from "react";

import Signupform from "./Signupform";
import Signupotp from "./Signupotp";

const Signup = () => {
  const [stepper, setStepper] = useState(0);

  const stepperInc = () => {
    setStepper(1 + stepper);
  };

  const toggleStepper = (param) => {
    switch (param) {
      case 0:
        return <Signupform stepperInc={stepperInc} />;
      case 1:
        return <Signupotp stepperInc={stepperInc} />;
      default:
        return setStepper(0);
    }
  };

  return <>{toggleStepper(stepper)}</>;
};

export default Signup;
