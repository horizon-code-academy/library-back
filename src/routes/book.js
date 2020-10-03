const {
  getallbooks,
  getonebook,
  addbooks,
  updatebook,
  deletebook,
} = require("../controllers/book");
const app = require("../../index");
module.exports = (app) => {
  app.get("/books", getallbooks);
  app.get("/books/:id", getonebook);
  //create books
  app.post("/books", addbooks);
  app.delete("/books/:id", deletebook);
  //update book
  app.put("/books/:id", updatebook);
};
