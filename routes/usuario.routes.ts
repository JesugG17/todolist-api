import { Router } from 'express';

import { validarJWT } from '../middlewares/validarJWT';

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