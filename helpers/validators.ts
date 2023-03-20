import { Todo } from "../models/Todo.model"
import { Usuario } from '../models/Usuario.model';



export const existeTodoId = async( id: string ) => {

    const todo = await Todo.findByPk(id);
    if (!todo) {
        throw new Error(`No existe un todo con el id ${ id }`);
    }

}

export const existeCorreo = async( correo: string ) => {

    const usuario = await Usuario.findOne({
        where: {
            correo
        }
    });

    if (usuario) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}
