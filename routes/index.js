import { Router } from 'express';

import mountRegisterRoutes from '../features/register/routes';
import mountLoginRoutes from '../features/login/routes';
import mountLogoutRoutes from '../features/logout/routes';
import mountResetPasswordRoutes from '../features/reset-password/routes';
import mountProfileRoutes from '../features/profile/routes';

const router = Router();

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

/* GET home page. */
router.get('/', isAuthenticated, (req, res) => {
  res.render('pages/dashboard');
});

router.get('/icons', isAuthenticated, (req, res) => {
  res.render('pages/icons');
});

router.get('/maps', isAuthenticated, (req, res) => {
  res.render('pages/maps');
});

router.get('/tables', isAuthenticated, (req, res) => {
  res.render('pages/tables');
});

mountRegisterRoutes(router);
mountLoginRoutes(router);
mountLogoutRoutes(router, [isAuthenticated]);
mountResetPasswordRoutes(router);
mountProfileRoutes(router, [isAuthenticated]);

export default router;
