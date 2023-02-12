import { Model } from 'sequelize';

export interface UsuarioModel extends Model {
    usuarioid: number
    nombre: string
    correo: string
    pass: string
    vig: boolean
}