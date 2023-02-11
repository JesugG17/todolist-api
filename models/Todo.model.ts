import { DataTypes } from 'sequelize';

import { Usuario } from './Usuario.model';
import { db } from '../database/config';

const Todo = db.define('Todo', {

    todoId: {
        type: DataTypes.STRING
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


Usuario.hasMany(Todo);