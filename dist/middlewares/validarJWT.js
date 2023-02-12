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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = require("http-status-codes");
const config_1 = __importDefault(require("../config"));
const Usuario_model_1 = require("../models/Usuario.model");
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { 'x-token': token } = req.headers;
    if (!token) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            msg: 'No hay token en la aplicacion'
        });
    }
    try {
        const { id } = jsonwebtoken_1.default.verify(String(token), config_1.default.SECRETKEY);
        const usuario = yield Usuario_model_1.Usuario.findByPk(id);
        if (!usuario) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                msg: 'Usuario no encontrado'
            });
        }
        if (!usuario.vig) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                msg: 'Este usuario no existe'
            });
        }
        req.usuario = usuario;
        // const usuario = await Usuario.findByPk( id );
        next();
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            msg: 'Token no valido'
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validarJWT.js.map