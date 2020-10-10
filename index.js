const studentroutes = require("./src/routes/student");
const bookroutes = require("./src/routes/book");
const userroutes = require("./src/routes/user");

//express import
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//monggose import
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
//bodyparser import
const bodyparser = require("body-parser");
const student = require("./src/controllers/student");
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(`welcome to library`);
});

const server = app.listen(8081, () => {
  const { address, port } = server.address();
  console.log(`exemple app listening at http://${address}:${port}`);
});
studentroutes(app);
bookroutes(app);
userroutes(app);
