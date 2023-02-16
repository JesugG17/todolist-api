import { DataTypes } from 'sequelize';
import { db } from '../database/config.database';
import { UsuarioModel } from '../interfaces/usuario-interface';
import { Role } from './Role.model';

export const Usuario = db.define<UsuarioModel>('Usuario', {
    usuarioid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    estatus: {
        type: DataTypes.BOOLEAN
    },
    roleid: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'roleid'
        },
        defaultValue: 2
    }
    // role: {
    //     type: DataTypes.STRING,
    //     references: {
    //         model: Role,
    //         key: 'role'
    //     },
    //     defaultValue: 'USER_ROLE'
    // }
}, {
    timestamps: false
});

const initUsuario = async() => {
    await Usuario.sync();
}

initUsuario();

// Usuario.belongsTo(Role, { foreignKey: 'role', targetKey: 'role' });
