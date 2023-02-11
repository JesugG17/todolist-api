"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (error) {
        return res.json(error);
    }
};
exports.validarCampos = validarCampos;
//# sourceMappingURL=validar-campos.js.map