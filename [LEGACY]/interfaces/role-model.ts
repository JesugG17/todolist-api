import { Model } from 'sequelize';


export interface RoleModel extends Model {
    roleid: number,
    role: string
};