import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario.model';
import bcrypt from 'bcrypt';

export const getUsers = async(req: Request, res: Response) => {
    
    const usuarios = await Usuario.findAll({
        where: {
            estatus: true
        }
    });

    const total = usuarios.length

    res.json({
        total,
        usuarios
    });
}

export const obtenerUsuario = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerUsuario'
    });
}

export const createUsers = async(req: Request, res: Response) => {

    const { nombre, correo, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const dataUsuario = {
        nombre,
        correo,
        password: hashedPassword,
        estatus: true
    };

    const usuario = await Usuario.create( dataUsuario );

    res.json( usuario );
}

export const updateUser = async(req: Request, res: Response) => {


    const id = req.usuario?.usuarioid;
    const { password, ...cambios } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt);
        cambios.password = hashedPassword;
    }

    const usuario = await Usuario.findByPk( id );

    await usuario?.update( cambios );

    res.json({ usuario });

}

export const deleteUser = async(req: Request, res: Response) => {
    
    const id = req.usuario?.usuarioid;

    const usuario = await Usuario.findByPk( id );
    console.log( usuario );
    await usuario?.update({ estatus: false });
    
    res.json({ usuario });
}

