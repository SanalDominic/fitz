const Express = require("express");
const Router = Express.Router();

const otpAuthHelper = require("../Helpers/CustomerHelper/otpAuth");

Router.post("/sendOtp", otpAuthHelper.sendOtp);

Router.post("/verifyOtp", otpAuthHelper.verifyOtp);

module.exports = Router;
