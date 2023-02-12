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
exports.eliminarTodo = exports.actualizarTodo = exports.crearTodo = exports.obtenerTodo = exports.obtenerTodos = void 0;
const uuidv4_1 = require("uuidv4");
const Todo_model_1 = require("../models/Todo.model");
const obtenerTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const usuarioid = (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.usuarioid;
    const todos = yield Todo_model_1.Todo.findAll({
        where: {
            usuarioid,
            estatus: true
        }
    });
    res.json({ todos });
});
exports.obtenerTodos = obtenerTodos;
const obtenerTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'obtenerTodos'
    });
});
exports.obtenerTodo = obtenerTodo;
const crearTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { description } = req.body;
    const data = {
        todoId: (0, uuidv4_1.uuid)(),
        description,
        estatus: true,
        usuarioid: (_b = req.usuario) === null || _b === void 0 ? void 0 : _b.usuarioid
    };
    console.log(data);
    const todo = yield Todo_model_1.Todo.create(data);
    res.json({ todo });
});
exports.crearTodo = crearTodo;
const actualizarTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { description } = req.body;
    const todo = yield Todo_model_1.Todo.findByPk(id);
    const newTodo = yield (todo === null || todo === void 0 ? void 0 : todo.update({ description }));
    res.json({ todo: newTodo });
});
exports.actualizarTodo = actualizarTodo;
const eliminarTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield Todo_model_1.Todo.findByPk(id);
    yield (todo === null || todo === void 0 ? void 0 : todo.update({ estatus: false }));
    res.json({ todo });
});
exports.eliminarTodo = eliminarTodo;
//# sourceMappingURL=todos.controller.js.map