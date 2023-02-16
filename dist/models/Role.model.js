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
exports.Role = void 0;
const config_database_1 = require("../database/config.database");
const sequelize_1 = require("sequelize");
exports.Role = config_database_1.db.define('Role', {
    roleid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
const initRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.Role.sync();
});
initRoles();
// Role.hasMany(Usuario, { foreignKey: 'roleid', sourceKey: 'roleid'});
// Usuario.belongsTo(Role, { foreignKey: 'roleid', targetKey: 'roleid'});
//# sourceMappingURL=Role.model.js.map