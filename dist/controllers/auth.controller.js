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
exports.logIn = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_codes_1 = require("http-status-codes");
const Usuario_model_1 = require("../models/Usuario.model");
const generarJWT_1 = require("../helpers/generarJWT");
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        const usuario = yield Usuario_model_1.Usuario.findOne({
            where: {
                correo
            }
        });
        if (!usuario) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                msg: `El correo ${correo} no existe`
            });
        }
        if (!usuario.estatus) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                msg: `El usuario con el correo ${correo} no existe`
            });
        }
        const isValidPassword = bcrypt_1.default.compareSync(password, usuario.password);
        if (!isValidPassword) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                msg: 'La contraseña no es correcta'
            });
        }
        const token = yield (0, generarJWT_1.generarJWT)(usuario.usuarioid);
        res.json({
            usuario,
            token
        });
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error
        });
    }
});
exports.logIn = logIn;
//# sourceMappingURL=auth.controller.js.map