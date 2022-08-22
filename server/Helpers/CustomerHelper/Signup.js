const Express = require("express");
const Router = Express.Router();

module.exports = {
  Signup: (req, res) => {
    const { fullName, email, password, mobile } = req.body.signupData;
    console.log(fullName);
  },
};
