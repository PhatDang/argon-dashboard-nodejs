/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { wrap } from 'async-middleware';

import requestBodyValidation from './commands/verify-request-body';
import updateUserInfo from './commands/update-user-info';

import loadPage from './commands/load-page';

export default (router, middlewares = []) => {
  router.get(
    '/profile',
    middlewares.map(middleware => wrap(middleware)),
    wrap(loadPage)
  );

  router.post('/update-profile-info', wrap(requestBodyValidation), wrap(updateUserInfo));

  return router;
};
