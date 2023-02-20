"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInputs = void 0;
const express_validator_1 = require("express-validator");
const http_status_codes_1 = require("http-status-codes");
const validateInputs = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error);
    }
    next();
};
exports.validateInputs = validateInputs;
//# sourceMappingURL=validar-campos.js.map