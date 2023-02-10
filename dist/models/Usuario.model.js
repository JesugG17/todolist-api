"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../database/config");
exports.Usuario = config_1.db.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    pass: {
        type: sequelize_1.DataTypes.STRING
    },
    vig: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
//# sourceMappingURL=Usuario.model.js.map