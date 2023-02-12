import { DataTypes, Model } from 'sequelize';
import { db } from '../database/config.database';

class UsuarioModel extends Model {
    declare usuarioid: number
    declare nombre: string
    declare correo: string
    declare pass: string
    declare vig: boolean
}

export const Usuario = db.define<UsuarioModel>('Usuario', {
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