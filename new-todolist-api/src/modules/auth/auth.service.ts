import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import { CreateUserDto } from "./dto/create-user-dto";
import { Users } from "./entities";


export class AuthService  {


    async logIn(email: string, password: string){

    }

    async register(createUserDto: CreateUserDto) {
        try {

            const { userName, email, password } = createUserDto;

            const newUser = new Users();

            const salt = await bcrypt.genSalt();
            newUser.userName = userName;
            newUser.email = email;
            newUser.password = bcrypt.hashSync(password, salt);
            newUser.status = true;

            await newUser.save();

            return {
                message: 'User registered successfully!',
                data: newUser,
                code: StatusCodes.CREATED
            }

        } catch (error) {
            console.log(error);
            return {
                message: 'A internal server error has ocurred',
                data: null,
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    googleSignIn() {
        
    }

}