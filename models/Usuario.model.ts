import { DataTypes } from 'sequelize';
import { db } from '../database/config';

export const Usuario = db.define('Usuario', {
    usuarioid: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    vig: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
