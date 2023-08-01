import { StatusCodes } from "http-status-codes";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Users } from "../auth/entities";
import bcrypt from 'bcrypt';

export class UserService {

    async update(updateUserDto: UpdateUserDto, userId: number) {
        try {
            const user = await Users.findOneBy({ userid: userId });

            if (!user) {
                return {
                    data: null,
                    message: 'This user do not exists',
                    code: StatusCodes.BAD_REQUEST
                }
            }

            user.username = updateUserDto.userName;
            
            if (updateUserDto.password) {
                const hashedPassword = bcrypt.hashSync(updateUserDto.password as string, bcrypt.genSaltSync());
                user.password = hashedPassword;
            }

            await user.save();

            return {
                data: {
                    userName: user.username
                },
                message: 'User updated successfully!',
                code: StatusCodes.OK
            }

        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while updating user',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    async resetPassword(email: string, newPasword: string) {
        try {
            
            const user = await Users.findOneBy({ email });

            if (!user) {
                return {
                    data: null,
                    message: `The user with the email ${email} do not exists`,
                    code: StatusCodes.BAD_REQUEST
                };
            }

            if (!user.isupdatingpass) {
                return {
                    data: null,
                    message: 'This user does not updating his pass',
                    code: StatusCodes.UNAUTHORIZED
                }
            }

            user.password = newPasword;
            user.isupdatingpass = false;
            
            await user.save();

            return {
                data: null,
                message: 'Password restored successfully',
                code: StatusCodes.OK
            }
        
        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while reseting password',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

    async delete(userId: number) {
        try {
            
            const user = await Users.findOneBy({ userid: userId });

            if (!user) {
                return {
                    data: null,
                    message: 'This user do not exists',
                    code: StatusCodes.BAD_REQUEST,
                }
            }

            user.status = false;

            await user.save();

            return {
                data: null,
                message: 'Account deleted successfully',
                code: StatusCodes.OK
            }
        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurred while deleting user',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

}