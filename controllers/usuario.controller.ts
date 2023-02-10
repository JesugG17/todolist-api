import { Request, Response } from 'express';


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
    res.json({
        msg: 'crearUsuario'
    });
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

