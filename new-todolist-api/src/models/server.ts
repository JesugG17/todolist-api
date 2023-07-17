import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from '../db/data-source';

export class Server {

    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 8080; 

        this.startDatabase();

        this.configureMiddlewares();
    }

    async startDatabase() {
        await AppDataSource.initialize();
    }

    configureMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('pbulic'));
    }

    configureRoutes() {

    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log('application running at 8080 port');
        });
    }

}