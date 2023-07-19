import { Router } from 'express';
import { AuthController } from './auth.controller';
import { catchErrors } from '../../common/middlewares';
import { check } from 'express-validator';
import { emailExists } from '../../common/utils/data-validators';

const router = Router();

const authController = new AuthController();

router.post('/login', authController.logIn);

router.post('/register',[
    check('email').custom(emailExists),
    catchErrors
], authController.register);

export default router;