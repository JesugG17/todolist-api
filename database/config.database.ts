import { Sequelize } from 'sequelize';
import config from '../config';

const user = config.DB_USERNAME;
const password = config.DB_PASSWORD;
const database = config.DB_DATABASE;
const host = config.SERVER_HOST;

export const db = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mssql'
  });

