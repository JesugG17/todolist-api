"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Todos = exports.Usuarios = void 0;
const usuario_routes_1 = __importDefault(require("./usuario.routes"));
exports.Usuarios = usuario_routes_1.default;
const todos_routes_1 = __importDefault(require("./todos.routes"));
exports.Todos = todos_routes_1.default;
const auth_routes_1 = __importDefault(require("./auth.routes"));
exports.Auth = auth_routes_1.default;
//# sourceMappingURL=index.js.map