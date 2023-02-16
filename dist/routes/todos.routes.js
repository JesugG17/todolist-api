"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validarJWT_1 = require("../middlewares/validarJWT");
const validar_campos_1 = require("../middlewares/validar-campos");
const todos_controller_1 = require("../controllers/todos.controller");
const validators_1 = require("../helpers/validators");
const router = (0, express_1.Router)();
router.get('/', [
    validarJWT_1.validarJWT
], todos_controller_1.obtenerTodos);
router.post('/', [
    validarJWT_1.validarJWT,
    (0, express_validator_1.check)('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], todos_controller_1.crearTodo);
router.put('/:id', [
    validarJWT_1.validarJWT,
    (0, express_validator_1.check)('id').custom(validators_1.existeTodoId),
    (0, express_validator_1.check)('description', 'la descripcion es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], todos_controller_1.actualizarTodo);
router.delete('/:id', [
    validarJWT_1.validarJWT,
    (0, express_validator_1.check)('id').custom(validators_1.existeTodoId),
    validar_campos_1.validarCampos
], todos_controller_1.eliminarTodo);
exports.default = router;
//# sourceMappingURL=todos.routes.js.map