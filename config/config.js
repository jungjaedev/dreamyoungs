const dotEnv = require('dotenv');
dotEnv.config();

const { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USER } = process.env;

module.exports = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: 'dreamyoungs',
    host: DATABASE_HOST,
    dialect: 'mysql',
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: 'dreamyoungs',
    host: DATABASE_HOST,
    dialect: 'mysql',
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: 'dreamyoungs',
    host: DATABASE_HOST,
    dialect: 'mysql',
  },
};
