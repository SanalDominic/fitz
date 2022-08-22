const Express = require("express");
const Router = Express.Router();
const SignupHelper = require("../Helpers/CustomerHelper/Signup");
Router.post("/signup", SignupHelper.Signup);

module.exports = Router;
