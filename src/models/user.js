const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    email: true,
    index: { unique: true, dropDups: true },
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
