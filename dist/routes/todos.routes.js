"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarJWT_1 = require("../middlewares/validarJWT");
const validar_campos_1 = require("../middlewares/validar-campos");
const todos_controller_1 = require("../controllers/todos.controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/', todos_controller_1.obtenerTodos);
router.get('/:id', todos_controller_1.obtenerTodo);
router.post('/', [
    validarJWT_1.validarJWT,
    (0, express_validator_1.check)('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], todos_controller_1.crearTodo);
router.put('/:id', todos_controller_1.actualizarTodo);
router.delete('/:id', todos_controller_1.eliminarTodo);
exports.default = router;
//# sourceMappingURL=todos.routes.js.map