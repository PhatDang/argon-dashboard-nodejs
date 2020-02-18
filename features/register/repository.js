import { hash } from 'bcrypt';
import knex from '../../db';

async function createUser({ name, username: email, password }) {
  const hashedPass = await hash(password, 5);
  const [user] = await knex('users')
    .insert({
      name,
      email,
      password: hashedPass,
      created_at: new Date(),
      updated_at: new Date(),
      email_verified_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}

export default {
  createUser,
};
