import { StatusCodes } from "http-status-codes";
import { v4 as uuid } from 'uuid';
import { Tasks } from "./entities/task.entity";
import { UpdateTaskDto } from './dto/update-task.dto';
import { In } from "typeorm";

export class TasksService {
    
    async getAll(userId: number) {
        const tasks = await Tasks.find({
            where: { userid: userId }
        });

        return {
            data: tasks,
            message: null,
            code: StatusCodes.OK
        }
    }

    async create(description: string, completed: boolean, userId: number) {
        try {

            const task = new Tasks();
            task.description = description;
            task.taskid = uuid();
            task.completed = completed;
            task.userid = userId;
            
            await task.save();

            return {
                data: task,
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

    async update(updateTaskDto: UpdateTaskDto, taskid: string) {
        try {
            
            const task = await Tasks.findOneBy({ taskid });

            if (!task) {
                return {
                    data: null,
                    message: `The task with id ${ taskid } do not exists`,
                    code: StatusCodes.BAD_REQUEST
                }
            }

            task.description = updateTaskDto.description ?? task.description;
            task.completed = updateTaskDto.completed ?? task.completed;

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

    async deleteOne(taskid: string) {
        try {
            
            await Tasks.delete({ taskid });

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

    async deleteMultiple(tasks: string[]) {
        try {
            
            const resp = await Tasks.delete({ taskid: In(tasks)});

            return {
                data: null,
                message: `${ resp.affected } tasks deleted successfully`,
                code: StatusCodes.OK
            }

        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while deleting tasks...',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }
}