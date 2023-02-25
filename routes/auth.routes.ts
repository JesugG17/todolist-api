import { Router } from 'express';
import { check } from 'express-validator';

import { logIn } from '../controllers/auth.controller';
import { validateInputs } from '../middlewares/validar-campos';

const router = Router();

router.post('/login', [
    check('correo', 'el correo no es valido').isEmail(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validateInputs
], logIn);

export default router;