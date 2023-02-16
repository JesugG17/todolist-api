"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarJWT_1 = require("../middlewares/validarJWT");
const express_validator_1 = require("express-validator");
const validators_1 = require("../helpers/validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', [
    validarJWT_1.validarJWT
], usuario_controller_1.obtenerUsuarios);
router.get('/:id', usuario_controller_1.obtenerUsuario);
router.post('/', [
    (0, express_validator_1.check)('correo').custom(validators_1.existeCorreo),
    validar_campos_1.validarCampos
], usuario_controller_1.crearUsuario);
router.put('/:id', [
    validarJWT_1.validarJWT
], usuario_controller_1.modificarUsuario);
router.delete('/:id', usuario_controller_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map