"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const user = config_1.default.DB_USERNAME;
const password = config_1.default.DB_PASSWORD;
exports.db = new sequelize_1.Sequelize('test', user, password, {
    host: 'localhost',
    dialect: 'mssql'
});
//# sourceMappingURL=config.js.map