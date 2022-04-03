// const { text } = require("body-parser");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  // district: {
  //   type: String,
  //   // required: ,
  // },
  access: {
    type: Number,
    default:0,
    required: true,
  },

});

// const UserModel = mongoose.model("users", UserSchema);
// module.exports = UserModel;

module.exports = mongoose.model("User",UserSchema);