import { Request, Response } from "express";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { Users } from "../auth/entities";
import { sendEmailToResetPassword } from "../../common/utils/sendEmail";

export class UserController {

    async update(req: Request, res: Response) {
        const userService = new UserService();
        const updateUserDto = req.body as UpdateUserDto;
        const userId = req.userId;

        const response = await userService.update(updateUserDto, userId as number);

        res.status(response.code).json(response);
    }
    
    async resetPassword(req: Request, res: Response) {
        const userService = new UserService();
        const { email, newPassword } = req.body;
        
        const response = await userService.resetPassword(email, newPassword);

        res.status(response.code).json(response);
    }

    async delete(req: Request, res: Response) {
        const userService = new UserService();
        const userId = req.userId;

        const response = await userService.delete(userId as number);

        res.status(response.code).json(response);
    }

}