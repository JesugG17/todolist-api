import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

import { AuthService } from "../services/auth.service";
import { CreateUsuarioDto } from '../models/create-user.dto';

export const logIn = async(req: Request, res: Response) => {

    const createUserDto = req.body as CreateUsuarioDto;
    
    try {
        
        const { usuario, token } = await AuthService.find(createUserDto);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error
        })
    }

}

export const register = async(req: Request,res: Response) => {

    const createUsuarioDto = req.body as CreateUsuarioDto;

    const usuario = await AuthService.create(createUsuarioDto);

    res.status(StatusCodes.CREATED).json({ usuario });

}