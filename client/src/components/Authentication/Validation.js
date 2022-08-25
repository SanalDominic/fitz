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
  if (!signupData.confirmPassword) {
    errors.confirmPassword = ` password is required`;
  } else if (signupData.confirmPassword !== signupData.password) {
    errors.confirmPassword = ` password did'nt match`;
  }

  if (!signupData.mobile) {
    errors.mobile = "mobile is required";
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(signupData.mobile)
  ) {
    errors.mobile = `"Only numbers allowed"`;
  } else if (!(signupData.mobile.length === 10)) {
    errors.mobile = "number should be 10 digits";
  }

  return errors;
};

export default Validation;
