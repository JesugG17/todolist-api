import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

export class AuthController {

    
    async logIn(req: Request, res: Response) {
        const authService = new AuthService()
        const { email, password } = req.body;

        const response = await authService.logIn(email, password);

        res.status(response.code).json(response);
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();
        const user = req.body as CreateUserDto;
        
        const response = await authService.register(user);
        
        res.status(response.code).json(response);
    }

    async googleSignIn(req: Request, res: Response) {
        const authService = new AuthService();
        const { code } = req.body;

        const response = await authService.googleSignIn(code);

        res.status(response.code).json(response);
    }

    async resetPassword(req: Request, res: Response) {
        const authService = new AuthService();
        const email = req.body.email as string;

        const response = await authService.resetPassword(email);

        res.json(response);
    }

}