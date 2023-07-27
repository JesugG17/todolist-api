import { Request, Response } from "express";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

export class UserController {

    async update(req: Request, res: Response) {
        const userService = new UserService();
        const updateUserDto = req.body as UpdateUserDto;
        const userId = req.userId;

        const response = await userService.update(updateUserDto, userId as number);

        res.status(response.code).json(response);
    }

    async delete(req: Request, res: Response) {
        const userService = new UserService();
        const userId = req.userId;

        const response = await userService.delete(userId as number);

        res.status(response.code).json(response);
    }

}