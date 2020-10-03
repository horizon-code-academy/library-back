const studentModel = require("../models/student");

async function getallstudents(req, res) {
  /**base de donner de users */
  const students = await studentModel
    .find(req.query)
    .populate("student")
    .exec();
  res.send(students);
}

async function getonestudent(req, res) {
  const students = await studentModel.findOne(
    { _id: req.params.id },
    req.body,
    () => {}
  );
  res.send(students);
}

async function addstudents(req, res) {
  {
    const newstudent = new studentModel(req.body);
    newstudent.save();
    res.send("students add");
  }
}
async function deletestudent(req, res) {
  studentModel.deleteOne({ _id: req.params.id }, () => {});
  res.send("students deleted");
}
async function updatestudent(req, res) {
  studentModel.updateOne({ _id: req.params.id }, req.body, () => {});
  res.send("student update successfuly");
}
module.exports = {
  getallstudents,
  getonestudent,
  addstudents,
  updatestudent,
  deletestudent,
};
