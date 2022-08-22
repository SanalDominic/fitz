const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerScema = Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    unique: true,
    require: true,
  },
});
