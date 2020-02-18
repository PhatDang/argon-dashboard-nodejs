import knex from '../../db';

async function getUser(id) {
  const [user] = await knex('users')
    .where('id', id)
    .select('email', 'name');
  return user;
}

async function updateUserInfo({ name, username: email, id }) {
  const [user] = await knex('users')
    .where({ id })
    .update({
      name,
      email,
      updated_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}

export default {
  getUser,
  updateUserInfo,
};
