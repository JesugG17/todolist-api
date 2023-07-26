import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

const userController = new UserController();

router.put('/update', userController.update);

router.delete('/delete', userController.delete);

export default router;