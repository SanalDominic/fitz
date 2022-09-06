const signupValidation = (signupData) => {
  let errors = {};
  if (!signupData.fullName) {
    errors.fullName = "Name is required.";
  } else if (
    !/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      signupData.fullName
    )
  ) {
    errors.fullName = "Name is not valid";
  }
  if (!signupData.email) {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(signupData.email)) {
    errors.email = "Email is invalid";
  }

  if (!signupData.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      signupData.password
    )
  ) {
    errors.password = "Not a valid password";
  }

  if (!signupData.confirmPassword) {
    errors.confirmPassword = ` Password is required`;
  } else if (signupData.confirmPassword !== signupData.password) {
    errors.confirmPassword = ` Password did'nt match`;
  }

  if (!signupData.mobile) {
    errors.mobile = "Mobile is required";
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(signupData.mobile)
  ) {
    errors.mobile = `"Only numbers allowed"`;
  } else if (!(signupData.mobile.length === 10)) {
    errors.mobile = "Number should be 10 digits";
  }

  return errors;
};

const loginValidation = (loginData) => {
  const errors = {};
  if (!loginData.email) {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginData.email)) {
    errors.email = "Email is invalid";
  }

  if (!loginData.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      loginData.password
    )
  ) {
    errors.password = "Not a valid password";
  }

  return errors;
};

export { signupValidation, loginValidation };
