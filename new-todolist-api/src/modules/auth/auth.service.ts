import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import { CreateUserDto } from './dto/create-user-dto';
import { Users } from './entities';
import { generateJWT } from '../../common/utils/generateJWT';
import { googleVerify } from '../../common/utils/googleVerify';

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
                data: { user: user.userName, token },
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
            newUser.google = false;

            await newUser.save();

            return {
                messages: ['User registered successfully!'],
                data: null,
                code: StatusCodes.CREATED
            }

        } catch (error) {
            console.log(error);
            return {
                messages: ['A internal server error has ocurred'],
                data: null,
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    async googleSignIn(code: string) {
        const data = await googleVerify(code);

        if (!data.ok) {
            return {
                data:null,
                messages: ['Google sign in failed'],
                code: StatusCodes.BAD_REQUEST
            }
        }

        let user = await Users.findOneBy({ email: data.email });

        if (!user) {
            user = new Users();
            user.email = data.email as string;
            user.userName = data.name as string;
            user.password = bcrypt.hashSync(':P', bcrypt.genSaltSync());
            user.google = true;
            user.status = true;
            user.save();
        }

        const token = await generateJWT(user.userid);

        return {
            data: {user: user.userName, token},
            message: ['Sign in successfully'],
            code: StatusCodes.OK
        }
        
    }

}