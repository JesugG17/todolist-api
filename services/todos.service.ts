// TODO: HACER EL SERVICE DE LOS TODOS

import { Request } from "express";
import { v4 as uuid } from 'uuid';
import { Todo } from '../models/Todo.model';


export class TodosService {

    static async findAll(req: Request) {
        const usuarioid = req.usuario?.usuarioid;
    
        const { count, rows: todos } = await Todo.findAndCountAll({
            where: {
                estatus: true,
                usuarioid
            },
        });

        return { count, todos };
    }

    static async create(req: Request) {
        const { description } = req.body;
    
        const data = {
            todoId: uuid(),
            description,
            estatus: true,
            usuarioid: req.usuario?.usuarioid
        };

        return await Todo.create(data);
    }

    static async update(req: Request) {
        const { id } = req.params;
        const { description } = req.body;

        const todo = await Todo.findByPk( id );

        return await todo?.update({ description });
    }

    static async delete(req: Request) {
        const { id } = req.params;

        const todo = await Todo.findByPk( id );
        
        await todo?.destroy();
    }
}