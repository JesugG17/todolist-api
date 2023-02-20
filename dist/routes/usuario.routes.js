"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validarJWT_1 = require("../middlewares/validarJWT");
const express_validator_1 = require("express-validator");
const validators_1 = require("../helpers/validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getUsers);
router.post('/', [
    (0, express_validator_1.check)('correo').custom(validators_1.existeCorreo),
    validar_campos_1.validateInputs
], usuario_controller_1.createUsers);
router.put('/', [
    validarJWT_1.validarJWT
], usuario_controller_1.updateUser);
router.delete('/', [
    validarJWT_1.validarJWT
], usuario_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map