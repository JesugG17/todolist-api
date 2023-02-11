"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Usuario_model_1 = require("./Usuario.model");
const config_1 = require("../database/config");
const Todo = config_1.db.define('Todo', {
    todoId: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    estatus: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    usuarioid: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Usuario_model_1.Usuario,
            key: 'id'
        }
    }
}, {
    timestamps: false
});
Usuario_model_1.Usuario.hasMany(Todo);
//# sourceMappingURL=Todo.model.js.map