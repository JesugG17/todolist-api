import { Request, Response } from "express";
import { TasksService } from "./tasks.service";
import { IRequest } from "../../common/types/irequest.interface";

export class TaskController {

    async getAll(req: Request, res: Response) {
        const taskService = new TasksService();

        // console.log(req.userId);

        res.json({ msg: 'ok' });
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