import { Router } from 'express';
import { AuthController } from './auth.controller';

export const router = Router();

const authController = new AuthController();

router.post('/logIn', authController.logIn);

router.post('/register', authController.register);