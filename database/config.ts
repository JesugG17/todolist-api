import { Sequelize } from 'sequelize';

export const db = new Sequelize('test', 'sa', '123', {
    host: 'localhost',
    dialect: 'mssql'
  });

