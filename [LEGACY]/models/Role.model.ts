import { db } from "../database/config.database";
import { DataTypes } from 'sequelize';
import { RoleModel } from '../interfaces/role-model';

export const Role = db.define<RoleModel>('Role', {
    roleid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    roleName: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

const initRoles = async() => {
    await Role.sync();
}

initRoles();


// Role.hasMany(Usuario, { foreignKey: 'roleid', sourceKey: 'roleid'});
// Usuario.belongsTo(Role, { foreignKey: 'roleid', targetKey: 'roleid'});
