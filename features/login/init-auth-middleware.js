import { use, serializeUser, deserializeUser, initialize, session } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { getUserForLoginData, getUserById } from './repository';

export default function initAuthMiddleware(app) {
  use(
    new LocalStrategy(async (username, password, done) => {
      const user = await getUserForLoginData(username, password);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    })
  );

  serializeUser((user, done) => done(null, user.id));

  deserializeUser(async (id, done) => {
    const user = await getUserById(id);
    if (!user) {
      return done(`Could not deserialize user with id ${id}`);
    }
    return done(null, user);
  });

  app.use(initialize());
  app.use(session());
}
