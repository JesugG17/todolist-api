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
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.modificarUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
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
    res.json({
        msg: 'crearUsuario'
    });
});
exports.crearUsuario = crearUsuario;
const modificarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'modificarUsuario'
    });
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'eliminarUsuario'
    });
});
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuario.controller.js.map