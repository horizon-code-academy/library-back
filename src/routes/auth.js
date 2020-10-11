import { verifySignIn, requireAuth } from '../config/passport';
import { signin, signOut } from '../controllers/auth';

export default function (router) {
  router.post('/login', verifySignIn, signin);
  router.get('/logout', requireAuth, signOut);
}
