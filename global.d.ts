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
      PORT: string;
      HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      SECRET_KEY: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      CLOUDINARY_URL: string;
      SENDER_EMAIL: string;
      SENDER_CLIENT_ID: string;
      SENDER_CLIENT_SECRET: string;
      SENDER_ACCESS_TOKEN: string;
      SENDER_REFRESH_TOKEN: string;
      NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION';
      // YOUR ENVIROMENT VARIALBES THAT YOU LIKE TO ADD
    }
}
}
