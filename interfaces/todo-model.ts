import { Model } from 'sequelize';
export interface TodoModel extends Model {
    todoId: number
    description: string
    estatus: boolean
    usuarioid: number
}