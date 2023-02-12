import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

import config from '../config';
import { Usuario } from "../models/Usuario.model";
import { UsuarioID } from "../interfaces/usuarioid-interface";


export const validarJWT = async(req: Request, res: Response, next: NextFunction) => {

    const { 'x-token': token } = req.headers;

    if (!token) {
        return res.status(StatusCodes.NOT_FOUND).json({
            msg: 'No hay token en la aplicacion'
        });
    }

    try {

        const { id } = jwt.verify(String(token), config.SECRETKEY) as UsuarioID;

        const usuario = await Usuario.findByPk( id );

        if (!usuario) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Usuario no encontrado'
            });
        }

        if (!usuario.vig) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Este usuario no existe'
            })
        }

        req.usuario = usuario;
        // const usuario = await Usuario.findByPk( id );
        next();
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Token no valido'
        })
    }

}