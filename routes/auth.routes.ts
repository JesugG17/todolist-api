import { Router } from 'express';
import { check } from 'express-validator';

import { logIn, register } from '../controllers/auth.controller';
import { validateInputs } from '../middlewares/validate-inputs';
import { existeCorreo } from '../helpers/validators';

const router = Router();

router.post('/login', [
    check('correo', 'el correo no es valido').isEmail(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validateInputs
], logIn);

router.post('/register',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo').custom(existeCorreo),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La longitud minima de la contraseña es de 8 caracteres').isLength({min: 6, max:16}),
    validateInputs
], register);

export default router;