require("dotenv").config();
const express = require("express");
// const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

const customerRoute = require("./Routes/Customer");

mongoose
  .connect("mongodb://localhost:27017/fitzfinal")
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Database connection error"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieparser());

app.use("/", customerRoute);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
