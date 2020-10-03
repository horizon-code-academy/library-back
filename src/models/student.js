const mongoose = require("mongoose");

//book schema
const studentschema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: Number,
});

module.exports = mongoose.model("student", studentschema);
