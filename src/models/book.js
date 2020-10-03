const mongoose = require("mongoose");

//book schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
});

module.exports = mongoose.model("book", BookSchema);
