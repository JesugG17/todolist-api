import { Request, Response } from "express";
import { uuid } from 'uuidv4';
import { Todo } from '../models/Todo.model';

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
    
    const data = {
        todoId: uuid(),
        description,
        estatus: true,
        usuarioid: req.usuario?.usuarioid
    };

    console.log( data );
    const todo = await Todo.create(data);

    res.json( todo);
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