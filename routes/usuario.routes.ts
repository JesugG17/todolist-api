import { Router } from 'express';

import { validarJWT } from '../middlewares/validarJWT';
import { check } from 'express-validator';
import { existeCorreo } from '../helpers/validators';
import { validarCampos } from '../middlewares/validar-campos';

import { getUsers,
         obtenerUsuario,
         createUsers,
         updateUser,
         deleteUser } from '../controllers/usuario.controller';


const router = Router();

router.get('/', getUsers);

router.get('/:id', obtenerUsuario);

router.post('/',[
    check('correo').custom( existeCorreo ),
    validarCampos
], createUsers);

router.put('/',[
    validarJWT
], updateUser);

router.delete('/',[
    validarJWT
] ,deleteUser);

export default router;