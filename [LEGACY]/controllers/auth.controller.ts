import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

import { AuthService } from "../services/auth.service";
import { CreateUsuarioDto } from '../models/create-user.dto';

export const logIn = async(req: Request, res: Response) => {

    try {
        
        const { usuario, token } = await AuthService.logIn(req.body as CreateUsuarioDto);
        res.json({
            nombre: usuario.nombre,
            token
        });

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            error
        })
    }

}

export const register = async(req: Request,res: Response) => {
    return res.status(StatusCodes.CREATED).json({
        usuario: await AuthService.register(req.body as CreateUsuarioDto)
    });
}