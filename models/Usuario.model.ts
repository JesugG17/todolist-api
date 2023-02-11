import { DataTypes } from 'sequelize';
import { db } from '../database/config.database';

export const Usuario = db.define('Usuario', {
    usuarioid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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

const initUsuario = async() => {
    await Usuario.sync();
}

initUsuario();