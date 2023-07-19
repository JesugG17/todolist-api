import { DataSource } from 'typeorm';
import config from '../../../config';
import { Users } from '../../modules/auth/entities';

const userName = config.DB_USERNAME;
const password = config.DB_PASSWORD;
const database = config.DB_NAME;

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    username: userName,
    password: password,
    database: database,
    entities: [Users], 
    extra: {
        trustServerCertificate: true
    }
});