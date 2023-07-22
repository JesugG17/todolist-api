import { StatusCodes } from "http-status-codes";
import { v4 as uuid } from 'uuid';
import { Tasks } from "./entities/task.entity";
import { UpdateTaskDto } from './dto/update-task.dto';


export class TasksService {
    
    async getAll(userId: number) {
        const tasks = await Tasks.find({
            where: { userId }
        });

        return {
            data: tasks,
            message: null,
            code: StatusCodes.OK
        }
    }

    async create(description: string, userId: number) {
        try {

            const task = new Tasks();
            task.description = description;
            task.taskId = uuid();
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
                message: 'An error has ocurred while creating task...',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    async update(updateTaskDto: UpdateTaskDto, taskId: string) {
        try {
            
            const task = await Tasks.findOneBy({ taskId });

            if (!task) {
                return {
                    data: null,
                    message: `The task with id ${ taskId } do not exists`,
                    code: StatusCodes.BAD_REQUEST
                }
            }

            task.description = updateTaskDto.description ?? task.description;
            task.status = updateTaskDto.status ?? task.status

            await task.save();

            return {
                data: null,
                message: 'Tasks updated successfully',
                code: StatusCodes.OK
            }

        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while updating task...',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }


    }

    async delete(taskId: string) {
        try {
            
            await Tasks.delete({ taskId });

            return {
                data: null,
                message: 'Task deleted successfully',
                code: StatusCodes.OK
            }

        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while deleting task...',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }
}