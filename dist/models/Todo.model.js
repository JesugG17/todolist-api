"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const Usuario_model_1 = require("./Usuario.model");
const config_database_1 = require("../database/config.database");
// TODO: FIX THE PROBLEM WITH THE INVALID COLUMN NAME
exports.Todo = config_database_1.db.define('Todo', {
    todoId: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
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
const initTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.Todo.sync();
});
initTodo();
Usuario_model_1.Usuario.hasMany(exports.Todo);
exports.Todo.belongsTo(Usuario_model_1.Usuario);
//# sourceMappingURL=Todo.model.js.map