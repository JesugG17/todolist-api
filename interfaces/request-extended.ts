import { Request } from "express";
import { UsuarioModel } from './usuario-model';

export interface RequestExtended extends Request {
    usuario: UsuarioModel
}
