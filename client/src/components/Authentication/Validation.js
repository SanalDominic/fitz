const Validation = (signupData) => {
  let errors = {};
  if (!signupData.fullName) {
    errors.fullName = "Name is required.";
  }
  if (!signupData.email) {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(signupData.email)) {
    errors.email = "email is invalid";
  }
  if (!signupData.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      signupData.password
    )
  ) {
    errors.password = "not a valid password";
  }
  return errors;
};

export default Validation;
