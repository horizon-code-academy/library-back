const { requireAuth } = require('../config/passport');
const { getallusers, getoneuser, addusers, updateuser, deleteuser } = require('../controllers/user');
const app = require('../index');

module.exports = (app) => {
  app.get('/users', requireAuth, getallusers);
  app.get('/users/:id', requireAuth, getoneuser);
  //create users
  app.post('/users', requireAuth, addusers);
  app.delete('/users/:id', requireAuth, deleteuser);
  //update user
  app.put('/users/:id', requireAuth, updateuser);
};
