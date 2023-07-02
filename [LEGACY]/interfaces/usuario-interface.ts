import { Model } from 'sequelize';

export interface UsuarioModel extends Model {
    usuarioid: number
    nombre: string
    correo: string
    password: string
    estatus: boolean
}