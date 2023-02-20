import { Router } from 'express';

import { validarJWT } from '../middlewares/validarJWT';
import { check } from 'express-validator';
import { existeCorreo } from '../helpers/validators';
import { validateInputs } from '../middlewares/validar-campos';

import { getUsers,
         createUsers,
         updateUser,
         deleteUser } from '../controllers/usuario.controller';


const router = Router();

router.get('/', getUsers);

router.post('/',[
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo').custom( existeCorreo ),
    validateInputs
], createUsers);

router.put('/',[
    validarJWT
], updateUser);

router.delete('/',[
    validarJWT
] ,deleteUser);

export default router;