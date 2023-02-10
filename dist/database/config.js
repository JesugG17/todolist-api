"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('test', 'sa', 'Hachiko11', {
    host: 'localhost',
    dialect: 'mssql'
});
//# sourceMappingURL=config.js.map