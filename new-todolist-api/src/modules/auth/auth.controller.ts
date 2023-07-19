import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user-dto';

export class AuthController {

    
    logIn(req: Request, res: Response) {
        
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();
        const user = req.body as CreateUserDto;
        
        const response = await authService.register(user);
        
        res.json(response);
    }

    googleSignIn(req: Request, res: Response) {

    }

}