const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
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
  status: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
});

const addressSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  location: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  landMark: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  pinCode: {
    type: Number,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
});

let Customer = mongoose.model("Customer", customerSchema);
let Address = mongoose.model("Address", addressSchema);

(module.exports = Customer), Address;
