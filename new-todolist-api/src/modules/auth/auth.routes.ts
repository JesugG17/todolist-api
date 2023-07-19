import { Router } from 'express';
import { AuthController } from './auth.controller';
import { catchErrors } from '../../common/middlewares';
import { check } from 'express-validator';
import { emailExists } from '../../common/utils/data-validators';

const router = Router();

const authController = new AuthController();

router.post('/login', authController.logIn);

router.post('/register',[
    check('userName', 'user name cannot be empty').not().isEmpty(),
    check('password', 'password cannot be empty').not().isEmpty(),
    check('password', 'the min length of password is 6').isLength({min: 6}),
    check('email', 'this email is not valid').isEmail(),
    check('email').custom(emailExists),
    catchErrors
], authController.register);

export default router;