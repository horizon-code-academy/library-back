const userModel = require("../models/user");

async function getallusers(req, res) {
  /**base de donner de users */
  const users = await userModel.find(req.query).populate("user").exec();
  res.send(users);
}

async function getoneuser(req, res) {
  const users = await userModel.findOne(
    { _id: req.params.id },
    req.body,
    () => {}
  );
  res.send(users);
}

async function addusers(req, res) {
  {
    const newuser = new userModel(req.body);
    newuser
      .save()
      .then(() => {
        res.send("user add succeed");
      })
      .catch((e) => {
        res.send("user add fail");
      });
  }
}
async function deleteuser(req, res) {
  userModel.deleteOne({ _id: req.params.id }, () => {});
  res.send("users deleted");
}
async function updateuser(req, res) {
  userModel.updateOne({ _id: req.params.id }, req.body, () => {});
  res.send("user update successfuly");
}
module.exports = {
  getallusers,
  getoneuser,
  addusers,
  updateuser,
  deleteuser,
};
