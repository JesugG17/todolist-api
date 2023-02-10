import { Sequelize } from 'sequelize';

export const db = new Sequelize('test', 'sa', 'Hachiko11', {
    host: 'localhost',
    dialect: 'mssql'
  });

