import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';
import { UpdateUsuarioDto } from '../models/update.user.dto';

export const getUsers = async(req: Request, res: Response) => {
    
    const { count, usuarios } = await UsuarioService.findAll();

    res.json({
        count,
        usuarios
    });
}

export const updateUser = async(req: Request, res: Response) => {
    
    const id = req.params.id;
    const newUsuario = req.body as UpdateUsuarioDto;

    const usuario = await UsuarioService.update(+id, newUsuario);

    res.json({ usuario });

}

export const deleteUser = async(req: Request, res: Response) => {
    
    const id = req.params.id;
    const usuario = await UsuarioService.delete(+id);
    
    res.json({ usuario });
}