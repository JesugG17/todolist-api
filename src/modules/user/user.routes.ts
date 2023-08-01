import { Router } from 'express';
import { UserController } from './user.controller';
import { validateJWT } from '../../common/middlewares/validateJWT';

const router = Router();

const userController = new UserController();

router.put('/update',[
    validateJWT
], userController.update);

router.delete('/delete',[
    validateJWT
], userController.delete);

router.put('/reset-password', userController.resetPassword);

export default router;