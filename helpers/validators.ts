import { Todo } from "../models/Todo.model"



export const existeTodoId = async( id: string ) => {

    const todo = await Todo.findByPk(id);
    if (!todo) {
        throw new Error(`No existe un todo con el id ${ id }`);
    }

}