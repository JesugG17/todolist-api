import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import { Usuario } from '../models/Usuario.model';
import { generarJWT } from "../helpers/generarJWT";

export const logIn = async(req: Request, res: Response) => {

    const { correo, password } = req.body;
    
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

        if (!usuario.estatus) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: `El usuario con el correo ${ correo } no existe`
            });
        }

        const isValidPassword = bcrypt.compareSync(password, usuario.password);

        if (!isValidPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'La contraseña no es correcta'
            });
        }

        const token = await generarJWT( usuario.usuarioid );

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

    const { correo, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const hashedPasswordd = bcrypt.hashSync(password, salt);
    
    const newUser = {
        correo,
        password: hashedPasswordd,
        estatus: true
    };

    const usuario = await Usuario.create( newUser );

    res.status(StatusCodes.CREATED).json({ usuario });

}