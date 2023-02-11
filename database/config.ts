import { Sequelize } from 'sequelize';

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export const db = new Sequelize('test', user, password, {
    host: 'localhost',
    dialect: 'mssql'
  });

