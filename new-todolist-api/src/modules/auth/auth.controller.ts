import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

export class AuthController {

    
    async logIn(req: Request, res: Response) {
        const authService = new AuthService()
        const { email, password } = req.body;

        const response = await authService.logIn(email, password);

        res.json(response);
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();
        const user = req.body as CreateUserDto;
        
        const response = await authService.register(user);
        
        res.json(response);
    }

    async googleSignIn(req: Request, res: Response) {
        const authService = new AuthService();
        const { code } = req.body;

        const response = await authService.googleSignIn(code);

        res.json(response);
    }

}