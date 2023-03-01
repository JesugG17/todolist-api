import { Router } from 'express';

import { validarJWT } from '../middlewares/validarJWT';
import { check } from 'express-validator';
import { existeCorreo } from '../helpers/validators';
import { validateInputs } from '../middlewares/validate-inputs';

import { getUsers,
         updateUser,
         deleteUser } from '../controllers/usuario.controller';


const router = Router();

router.get('/', getUsers);

router.put('/',[
    validarJWT
], updateUser);

router.delete('/',[
    validarJWT
] ,deleteUser);

export default router;