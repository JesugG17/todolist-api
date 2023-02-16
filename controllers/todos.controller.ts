import { Request, Response } from "express";
import { uuid } from 'uuidv4';
import { Todo } from '../models/Todo.model';

export const obtenerTodos = async(req: Request, res: Response) => {


    const { offset = 0, limit = 100 } = req.query;
    const usuarioid = req.usuario?.usuarioid;

    const { count, rows: todos } = await Todo.findAndCountAll({
        where: {
            estatus: true,
            usuarioid
        },
        offset: Number(offset),
        limit: Number(limit)
    });

    res.json({ count, todos });
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

    res.json({ todo });
}

export const actualizarTodo = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { description } = req.body;

    const todo = await Todo.findByPk( id );

    const newTodo = await todo?.update({ description });

    res.json({ todo: newTodo });
    
}

export const eliminarTodo = async(req: Request, res: Response) => {
    const { id } = req.params;

    const todo = await Todo.findByPk( id );

    await todo?.update({ estatus: false });

    res.json({ todo });
}