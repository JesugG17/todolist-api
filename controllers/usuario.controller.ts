import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario.model';
import bcrypt from 'bcrypt';


export const obtenerUsuarios = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerUsuario'
    });
}

export const obtenerUsuario = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerUsuario'
    });
}

export const crearUsuario = async(req: Request, res: Response) => {

    const { nombre, correo, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const newPassword = bcrypt.hashSync(password, salt);

    const dataUsuario = {
        nombre,
        correo,
        pass: newPassword,
        vig: true
    };

    const usuario = await Usuario.create( dataUsuario );

    res.json( usuario );
}

export const modificarUsuario = async(req: Request, res: Response) => {
    res.json({
        msg: 'modificarUsuario'
    });
}

export const eliminarUsuario = async(req: Request, res: Response) => {
    res.json({
        msg: 'eliminarUsuario'
    });
}

