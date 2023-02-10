"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.obtenerUsuarios);
router.get('/:id', usuario_controller_1.obtenerUsuario);
router.get('/', usuario_controller_1.crearUsuario);
router.get('/:id', usuario_controller_1.modificarUsuario);
router.get('/:id', usuario_controller_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map