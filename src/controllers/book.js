const bookModel = require("../models/book");

async function getallbooks(req, res) {
  /**base de donner de users */
  const books = await bookModel.find(req.query).populate("book").exec();
  res.send(books);
}

async function getonebook(req, res) {
  const books = await bookModel.findOne(
    { _id: req.params.id },
    req.body,
    () => {}
  );
  res.send(books);
}

async function addbooks(req, res) {
  {
    const newbook = new bookModel(req.body);
    newbook.save();
    res.send("books add");
  }
}
async function deletebook(req, res) {
  bookModel.deleteOne({ _id: req.params.id }, () => {});
  res.send("books deleted");
}
async function updatebook(req, res) {
  bookModel.updateOne({ _id: req.params.id }, req.body, () => {});
  res.send("book update successfuly");
}
module.exports = {
  getallbooks,
  getonebook,
  addbooks,
  updatebook,
  deletebook,
};
