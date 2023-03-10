import { DataTypes } from 'sequelize';

import { Usuario } from './Usuario.model';
import { db } from '../database/config.database';
import { TodoModel } from '../interfaces/todo-interface';

export const Todo = db.define<TodoModel>('Todo', {

    todoId: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
    },

    estatus: {
        type: DataTypes.BOOLEAN
    },

    usuarioid: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'usuarioid' 
        }
    }

}, {
    timestamps: false
});

const initTodo = async() => {
    await Todo.sync();

}

initTodo();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         