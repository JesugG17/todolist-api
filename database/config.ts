import { Sequelize } from 'sequelize';
import config from '../config';

const user = config.DB_USERNAME;
const password = config.DB_PASSWORD;

export const db = new Sequelize('test', user, password, {
    host: 'localhost',
    dialect: 'mssql'
  });

