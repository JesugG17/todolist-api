import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "../db/data-source";
import { Paths } from "../types/paths.interface";
import AuthRouter from "../../modules/auth/auth.routes";
import TasksRouter from '../../modules/tasks/tasks.routes';
import UploadRouter from '../../modules/upload/upload.routes';
import bodyParser from "body-parser";

export class Server {
  private app: Application;
  private port: number;
  private paths: Paths;

  constructor() {
    this.app = express();
    this.port = 8080;
    this.paths = {
      auth: "/api/auth",
      task: "/api/task",
      upload: "/api/upload",
    };

    this.middlewares();

    this.routes();

    this.startDatabase();

  }

  private async startDatabase() {
    await AppDataSource.initialize();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
  }

  private routes() {
    this.app.use(this.paths.auth, AuthRouter);
    this.app.use(this.paths.task, TasksRouter);
    this.app.use(this.paths.upload, UploadRouter);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`application running at ${this.port} port`);
    });
  }
}
