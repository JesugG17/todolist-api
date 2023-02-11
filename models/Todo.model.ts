import { DataTypes } from 'sequelize';

import { Usuario } from './Usuario.model';
import { db } from '../database/config.database';

const Todo = db.define('Todo', {

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
            key: 'id' 
        }
    }

}, {
    timestamps: false
});



const initTodo = async() => {
    await Todo.sync();
}
initTodo();
Usuario.hasMany(Todo);