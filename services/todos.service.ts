import { v4 as uuid } from 'uuid';
import { Todo } from '../models/Todo.model';

export class TodosService {

    static async findAll(usuarioid: number) {
    
        const { count, rows: todos } = await Todo.findAndCountAll({
            where: {
                estatus: true,
                usuarioid
            },
        });

        return { count, todos };
    }

    static async create(usuarioid: number, description: string) {
    
        const data = {
            todoId: uuid(),
            description,
            estatus: true,
            usuarioid
        };

        return await Todo.create(data);
    }

    static async update(todoid: string, description: string) {

        const todo = await Todo.findByPk( todoid );

        return await todo?.update({ description });
    }

    static async delete(todoid: string) {

        const todo = await Todo.findByPk( todoid );
        
        await todo?.destroy();
    }

}