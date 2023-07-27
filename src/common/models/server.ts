import express, { Application } from "express";
import fileUpload from 'express-fileupload';
import bodyParser from "body-parser";
import cors from "cors";

import { AppDataSource } from "../db/data-source";
import { Paths } from "../types/paths.interface";

import config from '../../../config';

import AuthRouter from "../../modules/auth/auth.routes";
import TasksRouter from '../../modules/tasks/tasks.routes';
import UploadRouter from '../../modules/upload/upload.routes';
import UserRouter from '../../modules/user/user.routes';
export class Server {
  private app: Application;
  private port: number;
  private paths: Paths;

  constructor() {
    this.app = express();
    this.port = +config.SERVER_PORT;
    this.paths = {
      auth: "/api/auth",
      task: "/api/task",
      upload: "/api/upload",
      user: '/api/user',
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
    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
      createParentPath: true
    }))
  }

  private routes() {
    this.app.use(this.paths.auth, AuthRouter);
    this.app.use(this.paths.task, TasksRouter);
    this.app.use(this.paths.upload, UploadRouter);
    this.app.use(this.paths.user, UserRouter);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`application running at ${this.port} port`);
    });
  }
}
