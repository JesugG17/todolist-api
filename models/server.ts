import express, { Application } from 'express';
import cors from 'cors';

import { db } from '../database/config';
import { Paths } from '../interfaces/paths-interface';
import { Usuarios, Todos, Auth } from '../routes';

class Server {

    private app: Application;
    private path: Paths;
    private port: number;

    constructor() {
        this.app = express();
        this.path = {
            usuarios: '/api/usuarios',
            todos: '/api/todos',
            auth: '/api/auth'
        };
        this.port = 8080;

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await db.authenticate();
    }

    routes() {
        this.app.use(this.path.usuarios, Usuarios);
        this.app.use(this.path.todos, Todos);
        this.app.use(this.path.auth, Auth);        
    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( cors() );
        this.app.use( express.static('public'));        
    }  

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        })
    }

}


export default Server;