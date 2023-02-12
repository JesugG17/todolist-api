import { Request, Response } from "express";
import { UsuarioType } from '../interfaces/usuario-interface';

import bcrypt from 'bcrypt';

import { StatusCodes } from 'http-status-codes';

import { Usuario } from '../models/Usuario.model';
import { generarJWT } from "../helpers/generarJWT";

export const logIn = async(req: Request, res: Response) => {

    const { correo, password } = req.body;
    console.log('Hola moundo');
    try {
        
        const usuario = await Usuario.findOne({
            where: {
                correo
            }
        });

        if (!usuario) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: `El correo ${ correo } no existe`
            });
        }

        if (!usuario.vig) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: `El usuario con el correo ${ correo } no existe`
            })
        }

        const token = await generarJWT()




        res.json(usuario);

    } catch (error) {
        
    }

}