import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

export const getUsers = async(req: Request, res: Response) => {
    
    const { count, usuarios } = await UsuarioService.findAll();

    res.json({
        count,
        usuarios
    });
}

export const updateUser = async(req: Request, res: Response) => {

    const usuario = await UsuarioService.update(req);

    res.json({ usuario });

}

export const deleteUser = async(req: Request, res: Response) => {
    
    const usuario = await UsuarioService.update(req);
    
    res.json({ usuario });
}