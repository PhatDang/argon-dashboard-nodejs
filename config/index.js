/* eslint-disable import/prefer-default-export */
export const database = {
  url: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
};
