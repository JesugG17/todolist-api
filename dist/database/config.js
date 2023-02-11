"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
exports.db = new sequelize_1.Sequelize('test', user, password, {
    host: 'localhost',
    dialect: 'mssql'
});
//# sourceMappingURL=config.js.map