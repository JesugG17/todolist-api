import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario.model';
import bcrypt from 'bcrypt';

export const getUsers = async(req: Request, res: Response) => {
    
    const { limit = 100, offset = 0 } = req.query;

    const { count, rows: usuarios } = await Usuario.findAndCountAll({
        where: {
            estatus: true
        },
        offset: Number(offset),
        limit: Number(limit)
    });

    res.json({
        count,
        usuarios
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