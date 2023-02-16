import { Request, Response } from "express";
import { uuid } from 'uuidv4';
import { Todo } from '../models/Todo.model';

export const obtenerTodos = async(req: Request, res: Response) => {

    const usuarioid = req.usuario?.usuarioid;
    console.log( usuarioid );
    const todos = await Todo.findAll({
        where: {
            usuarioid,
            estatus: true
        }
    });

    const total = todos.length;

    res.json({ total, todos });
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