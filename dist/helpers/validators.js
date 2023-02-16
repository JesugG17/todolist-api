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
exports.existeCorreo = exports.existeTodoId = void 0;
const Todo_model_1 = require("../models/Todo.model");
const Usuario_model_1 = require("../models/Usuario.model");
const existeTodoId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield Todo_model_1.Todo.findByPk(id);
    if (!todo) {
        throw new Error(`No existe un todo con el id ${id}`);
    }
});
exports.existeTodoId = existeTodoId;
const existeCorreo = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield Usuario_model_1.Usuario.findOne({
        where: {
            correo
        }
    });
    if (usuario) {
        throw new Error(`El correo ${correo} ya esta registrado`);
    }
});
exports.existeCorreo = existeCorreo;
//# sourceMappingURL=validators.js.map