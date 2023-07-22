import { StatusCodes } from "http-status-codes";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Tasks } from "./entities/task.entity";
// import { nanoid } from "nanoid";


export class TasksService {
    
    async getAll(userId: number) {
        return await Tasks.find({
            where: { userId }
        });
    }

    async create(createTaskDto: CreateTaskDto, userId: number) {
        try {

            const task = new Tasks();
            task.description = createTaskDto.description;
            task.taskId = '';
            task.status = true;
            task.userId = userId;
            
            await task.save();

            return {
                data: null,
                message: 'Task created successfully',
                code: StatusCodes.CREATED
            }

        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurren while creating tasks, try again',
                code: StatusCodes.BAD_REQUEST
            }
        }
    }

    async update(taskId: string) {

    }

    async delete(taskId: string) {

    }
}