import { requireAuth } from '../config/passport';
import { requireAdmin } from '../config/roles';
import { getallbooks, getonebook, addbooks, updatebook, deletebook } from '../controllers/book';

module.exports = (app) => {
  app.get('/books', requireAuth, getallbooks);
  app.get('/books/:id', requireAuth, getonebook);
  //create books
  app.post('/books', requireAuth, addbooks);
  app.delete('/books/:id', requireAuth, requireAdmin, deletebook);
  //update book
  app.put('/books/:id', requireAuth, updatebook);
};
