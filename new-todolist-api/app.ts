import dotenv from 'dotenv';
import { Server } from './src/models/server';
import 'reflect-metadata';

dotenv.config();
const app = new Server();


