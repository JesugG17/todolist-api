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
                    message: 'The password is incorrect',
                    data: null,
                    code: StatusCodes.BAD_REQUEST
                }
            }

            const token = await generateJWT(user.userid);

            return {
                message: 'Login succesfully',
                data: { 
                    user: {
                        userName: user.userName,
                        email: user.email,
                        photo: user.photoUrl,
                    }, 
                    token 
                },
                code: StatusCodes.OK
            }

        } catch (error)  {
            return {
                message: 'A internal server error has ocurred',
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
                message: 'User registered successfully!',
                data: null,
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

    async googleSignIn(code: string) {
        const data = await googleVerify(code);

        if (!data.ok) {
            return {
                data:null,
                message: 'Google sign in failed',
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
            user.photoUrl = data.picture as string;
            user.save();
        }

        const token = await generateJWT(user.userid);

        return {
            data: {
                user: {
                    userName: user.userName,
                    email: user.email,
                    photo: user.photoUrl
                }, 
                token
            },
            message: 'Sign in successfully',
            code: StatusCodes.OK
        }
        
    }

}