const Express = require("express");
const Router = Express.Router();

const otpAuthHelper = require("../Helpers/CustomerHelper/otpAuth");

const loginHelper = require("../Helpers/CustomerHelper/login");

Router.post("/sendOtp", otpAuthHelper.sendOtp);

Router.post("/verifyOtp", otpAuthHelper.verifyOtp);

Router.post("/login", loginHelper.login);

module.exports = Router;
