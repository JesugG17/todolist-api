import { Request, Response } from "express";
import { uuid } from 'uuidv4';

export const obtenerTodos = async(req: Request, res: Response) => {

    res.json({
        msg: 'obtenerTodos'
    });
}

export const obtenerTodo = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerTodos'
    });
}

export const crearTodo = async(req: Request, res: Response) => {

    const { description } = req.body;

    

    res.json({
        msg: 'obtenerTodos'
    });
}

export const actualizarTodo = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerTodos'
    });
}

export const eliminarTodo = async(req: Request, res: Response) => {
    res.json({
        msg: 'obtenerTodos'
    });
}