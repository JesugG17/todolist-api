
namespace NodeJS {
    interface ProcessEnv {
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      SECRET_KEY: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      // YOUR ENVIROMENT VARIALBES THAT YOU LIKE TO ADD
    }
}


// THE CODE OF BELOW IS FOR EXTEND THE REQUEST TYPE OF EXPRESS

declare global {
  namespace Express {
    export interface Request {
      userId?: number;
    }
  }
}