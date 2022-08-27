import React, { useState } from "react";

import Loginform from "./Loginform";
import Getotp from "./Getotp";
import Confirmotp from "./Confirmotp";
import Changepassword from "./Changepassword";

const Login = () => {
  const [stepper, setStepper] = useState(0);

  const stepperInc = () => {
    setStepper(1 + stepper);
  };

  const toggleStepper = (param) => {
    switch (param) {
      case 0:
        return <Loginform stepperInc={stepperInc} />;
      case 1:
        return <Getotp stepperInc={stepperInc} />;
      case 2:
        return <Confirmotp stepperInc={stepperInc} />;
      case 3:
        return <Changepassword stepperInc={stepperInc} />;
      default:
        return setStepper(0);
    }
  };

  return <>{toggleStepper(stepper)}</>;
};

export default Login;
