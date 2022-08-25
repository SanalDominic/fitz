const Express = require("express");
const Router = Express.Router();
const SignupHelper = require("../Helpers/CustomerHelper/Signup");
const sendOtpHelper = require("../Helpers/CustomerHelper/Otpsend");

Router.post("/sendOtp", sendOtpHelper.sendOtp);

Router.post("/signup", SignupHelper.Signup);

module.exports = Router;
