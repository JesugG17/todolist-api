import { UsuarioModel } from './interfaces/usuario-interface';
namespace NodeJS {
    interface ProcessEnv {
      SECRETKEY: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
    }
}


declare global {
  namespace Express {
    export interface Request {
      usuario?: UsuarioModel;
    }
  }
}