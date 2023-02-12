import { DataTypes } from 'sequelize';
import { db } from '../database/config.database';
import { UsuarioModel } from '../interfaces/usuario-model';
import { Todo } from './Todo.model';

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

// Todo.belongsTo(Usuario);