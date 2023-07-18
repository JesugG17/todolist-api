import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from '../db/data-source';
import { Paths } from '../types/paths.interface';
import AuthRouter from '../../modules/auth/auth.routes';

export class Server {

    private app: Application;
    private port: number;
    private paths: Paths;

    constructor() {
        this.app = express();
        this.port = 8080; 
        this.paths = {
            auth: '/api/auth',
            task: '/api/task'
        }

        this.configureRoutes();

        this.configureMiddlewares();
        
        this.startDatabase();
    }

    private async startDatabase() {
        await AppDataSource.initialize();
    }

    private configureMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    private configureRoutes() {
        this.app.use(this.paths.auth, AuthRouter);
    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log(`application running at ${ this.port } port`);
        });
    }

}