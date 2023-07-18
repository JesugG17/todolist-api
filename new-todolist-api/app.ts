import dotenv from 'dotenv';
import { Server } from './src/common/models/server';
import 'reflect-metadata';

dotenv.config();
const app = new Server();
app.startServer();

