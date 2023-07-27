import { Express } from 'express';
import Request from 'express';

declare global {
  namespace Express {
    export interface Request {
      userId?: number;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      SECRET_KEY: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      CLOUDINARY_URL: string;
      // YOUR ENVIROMENT VARIALBES THAT YOU LIKE TO ADD
    }
}
}
