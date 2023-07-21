import { Users } from "../../modules/auth/entities"



export const emailExists = async(email: string) => {

    const user = await Users.findOneBy({ email });

    if (user) {
        throw new Error('This email is already taken');
    }
}

export const emailNotExists = async(email: string) => {

    const user = await Users.findOneBy({ email });

    if (!user) {
        throw new Error('this emails do not exists');
    }

}