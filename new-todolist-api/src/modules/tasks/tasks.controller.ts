import { Request, Response } from "express";
import { TasksService } from "./tasks.service";

export class TaskController {

    async getAll(req: Request, res: Response) {
        const taskService = new TasksService();
        const userId = req.userId;

        const response = await taskService.getAll(userId as number);

        res.json(response);
    }

    async  create(req: Request, res: Response) {
        const taskService = new TasksService();

        res.json({ msg: 'its working' });
    }

    async update(req: Request, res: Response) {
        const taskService = new TasksService();

    }

    async delete(req: Request, res: Response) {
        const taskService = new TasksService();

    }

}