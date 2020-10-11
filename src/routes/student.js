import { requireAuth } from '../config/passport';
import { requireAdmin } from '../config/roles';
import { getallstudents, getonestudent, addstudents, updatestudent, deletestudent } from '../controllers/student';

module.exports = (app) => {
  app.get('/students', requireAuth, getallstudents);
  app.get('/students/:id', requireAuth, getonestudent);
  //create students
  app.post('/students', requireAuth, addstudents);
  app.delete('/students/:id', requireAuth, requireAdmin, deletestudent);
  //update student
  app.put('/students/:id', requireAuth, updatestudent);
};
