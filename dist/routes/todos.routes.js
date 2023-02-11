"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = require("../controllers/todos.controller");
const router = (0, express_1.Router)();
router.get('/', todos_controller_1.obtenerTodos);
router.get('/:id', todos_controller_1.obtenerTodo);
router.post('/', todos_controller_1.crearTodo);
router.put('/:id', todos_controller_1.actualizarTodo);
router.delete('/:id', todos_controller_1.eliminarTodo);
exports.default = router;
//# sourceMappingURL=todos.routes.js.map