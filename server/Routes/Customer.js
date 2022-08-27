const Express = require("express");
const Router = Express.Router();
const signupHelper = require("../Helpers/CustomerHelper/Signup");
const otpAuthHelper = require("../Helpers/CustomerHelper/otpAuth");

Router.post("/sendOtp", otpAuthHelper.sendOtp);

Router.post("/verifyOtp", otpAuthHelper.verifyOtp);

Router.post("/signup", signupHelper.Signup);

module.exports = Router;
