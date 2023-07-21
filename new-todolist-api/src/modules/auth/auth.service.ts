import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import { CreateUserDto } from './dto/create-user-dto';
import { Users } from './entities';
import { generateJWT } from '../../common/utils/generateJWT';


export class AuthService  {


    async logIn(email: string, password: string) {
        try {

            const user = await Users.findOneBy({ email }) as Users;

            const isValidPassword = bcrypt.compareSync(password, user.password);
            
            if (!isValidPassword) {
                return {
                    messages: ['The password is incorrect'],
                    data: null,
                    code: StatusCodes.BAD_REQUEST
                }
            }

            const token = await generateJWT(user.userid);

            return {
                messages: ['Login succesfully'],
                data: { user, token },
                code: StatusCodes.OK
            }

        } catch (error)  {
            return {
                messages: ['A internal server error has ocurred'],
                data: null,
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
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
                messages: ['User registered successfully!'],
                data: newUser,
                code: StatusCodes.CREATED
            }

        } catch (error) {
            return {
                messages: ['A internal server error has ocurred'],
                data: null,
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    googleSignIn() {
        
    }

}