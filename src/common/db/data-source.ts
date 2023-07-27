import { DataSource } from 'typeorm';
import config from '../../../config';
import { Users } from '../../modules/auth/entities';
import { Tasks } from '../../modules/tasks/entities/task.entity';

const host = config.HOST;
const userName = config.DB_USERNAME;
const password = config.DB_PASSWORD;
const database = config.DB_NAME;

export const AppDataSource = new DataSource({
    port: 6221,
    type: 'postgres',
    host: host,
    username: userName,
    password: password,
    database: database,
    entities: [Users, Tasks], 
    extra: {
        trustServerCertificate: true
    }
});
