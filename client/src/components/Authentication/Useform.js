// import { useState, useEffect } from "react";
// import Validation from "./Validation";

// const Useform = ({ signupData, setSignupData }) => {
//   const [datacorrect, setdata] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setSignupData({
//       ...signupData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const hadleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(Validation(signupData));
//     setdata(true);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && datacorrect) {
//       setFormSubmitted(true);
//     }
//   }, [errors]);

//   return { handleChange, hadleSubmit, errors, signupData, formSubmitted };
// };

// export default Useform;
