const { getallusers, getoneuser, addusers, updateuser, deleteuser } = require('../controllers/user');
const app = require('../index');

module.exports = (app) => {
  app.get('/users', getallusers);
  app.get('/users/:id', getoneuser);
  //create users
  app.post('/users', addusers);
  app.delete('/users/:id', deleteuser);
  //update user
  app.put('/users/:id', updateuser);
};
