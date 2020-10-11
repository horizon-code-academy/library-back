const { getallstudents, getonestudent, addstudents, updatestudent, deletestudent } = require('../controllers/student');
const app = require('../index');

module.exports = (app) => {
  app.get('/students', getallstudents);
  app.get('/students/:id', getonestudent);
  //create students
  app.post('/students', addstudents);
  app.delete('/students/:id', deletestudent);
  //update student
  app.put('/students/:id', updatestudent);
};
