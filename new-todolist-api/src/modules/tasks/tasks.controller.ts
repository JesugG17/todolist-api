import { Request, Response } from "express";
import { TasksService } from "./tasks.service";
import { UpdateTaskDto } from "./dto/update-task.dto";

export class TaskController {

    async getAll(req: Request, res: Response) {
        const taskService = new TasksService();
        const userId = req.userId as number;

        const response = await taskService.getAll(userId);

        res.status(response.code).json(response);
    }

    async  create(req: Request, res: Response) {
        const taskService = new TasksService();
        const { description } = req.body;
        const userId = req.userId as number;

        const response = await taskService.create(description, userId);

        res.status(response.code).json(response);
    }

    async update(req: Request, res: Response) {
        const taskService = new TasksService();
        const tasksId = req.params.id;
        const updateTaskDto = req.body as UpdateTaskDto;

        const response = await taskService.update(updateTaskDto,  tasksId);

        res.status(response.code).json(response);
    }

    async delete(req: Request, res: Response) {
        const taskService = new TasksService();
        const taskId = req.params.id;

        const response = await taskService.delete(taskId);

        res.status(response.code).json(response);
    }

}