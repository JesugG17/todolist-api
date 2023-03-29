import { Request, Response } from "express";
import { TodosService } from "../services/todos.service";

export const getTodos = async(req: Request, res: Response) => {

    const { count, todos } = await TodosService.findAll(req);

    res.json({ count, todos });
}

export const createTodo = async(req: Request, res: Response) => {

    const todo = await TodosService.create(req);

    res.json({ todo });
}

export const updateTodo = async(req: Request, res: Response) => {

    const todo = await TodosService.update(req);

    res.json({ todo });
    
}

export const deleteTodo = async(req: Request, res: Response) => {
    await TodosService.delete(req);
}