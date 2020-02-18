import { wrap } from 'async-middleware';

import requestBodyValidation from './commands/verify-request-body';
import createUser from './commands/create-user';
import loadPage from './commands/load-page';

export default router => {
  router.get('/register', wrap(loadPage));

  router.post('/register', wrap(requestBodyValidation), wrap(createUser));

  return router;
};
