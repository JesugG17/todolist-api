import { Request, Response } from 'express';
import { User } from './entities/user.entity';

export class AuthController {

    register(req: Request, res: Response) {

    }

    logIn(req: Request, res: Response) {
        
        // const user = new User();
        // user.email = 'some';
        // user.userName = 'some';
        // user.password = 'some';

        // user.save();

        res.json({ msg: 'hola mundo' });
    }
}