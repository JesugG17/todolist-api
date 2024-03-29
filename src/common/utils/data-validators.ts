import { Users } from "../../modules/auth/entities"
import { Tasks } from "../../modules/tasks/entities/task.entity";



export const emailExists = async(email: string) => {

    const user = await Users.findOneBy({ email });

    if (user && user.status) {
        throw new Error('This email is already taken');
    }
}

export const emailNotExists = async(email: string) => {

    const user = await Users.findOneBy({ email });

    if (!user) {
        throw new Error('This emails do not exists');
    }

}

export const tasksExists = async(taskId: string) => {
    const task = await Tasks.findOneBy({ taskid: taskId });

    if (!task) {
        throw new Error(`The task with id ${ taskId } do not exists`)
    }
}