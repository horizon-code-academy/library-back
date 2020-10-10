const mongoose = require("mongoose");

//book schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

module.exports = mongoose.model("user", userSchema);
