import env from './environment';

const defaultConfig = {
  username: env.DATABASE_USERNAME,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  host: env.DATABASE_HOST,
  dialect: env.DATABASE_DIALECT,
};

const database = {
  development: {
    ...defaultConfig
  },
  staging: {
    ...defaultConfig
  },
  production: {
    ...defaultConfig
  }
};

export default database;
