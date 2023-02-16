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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.modificarUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
const Usuario_model_1 = require("../models/Usuario.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'obtenerUsuario'
    });
});
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'obtenerUsuario'
    });
});
exports.obtenerUsuario = obtenerUsuario;
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, correo, password } = req.body;
    const salt = bcrypt_1.default.genSaltSync();
    const hashedPassword = bcrypt_1.default.hashSync(password, salt);
    const dataUsuario = {
        nombre,
        correo,
        password: hashedPassword,
        estatus: true
    };
    const usuario = yield Usuario_model_1.Usuario.create(dataUsuario);
    res.json(usuario);
});
exports.crearUsuario = crearUsuario;
const modificarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const _a = req.body, { password } = _a, cambios = __rest(_a, ["password"]);
    if (password) {
        const salt = bcrypt_1.default.genSaltSync();
        const hashedPassword = bcrypt_1.default.hashSync(password, salt);
        cambios.password = hashedPassword;
    }
    const usuario = yield Usuario_model_1.Usuario.findByPk(id);
    yield (usuario === null || usuario === void 0 ? void 0 : usuario.update(cambios));
    res.json({ usuario });
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'eliminarUsuario'
    });
});
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuario.controller.js.map