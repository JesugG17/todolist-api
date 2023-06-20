import { Request, Response } from 'express';
import { TodosService } from '../services/todos.service';

export const getTodos = async(req: Request, res: Response) => {
    
    const usuarioid = req.usuario?.usuarioid as number;

    const { count, todos } = await TodosService.findAll(usuarioid);

    res.json({ count, todos });
}

export const createTodo = async(req: Request, res: Response) => {

    const usuarioid = req.usuario?.usuarioid as number;
    const { description } = req.body;

    const todo = await TodosService.create(usuarioid, description);
    res.json({ todo });
}

export const updateTodo = async(req: Request, res: Response) => {

    const todoid = req.params.id;
    const { description } = req.body;

    const todo = await TodosService.update(todoid, description);

    res.json({ todo });
    
}

export const deleteTodo = async(req: Request, res: Response) => {
    await TodosService.delete(req.params.id);

    res.json({
        ok: true
    })
}