import { Router } from 'express';

import { validarJWT } from '../middlewares/validarJWT';
import { check } from 'express-validator';
import { existeCorreo } from '../helpers/validators';
import { validarCampos } from '../middlewares/validar-campos';

import { obtenerUsuarios,
         obtenerUsuario,
         crearUsuario,
         modificarUsuario,
         eliminarUsuario } from '../controllers/usuario.controller';


const router = Router();

router.get('/',[
    validarJWT
],obtenerUsuarios);

router.get('/:id', obtenerUsuario);

router.post('/',[
    check('correo').custom( existeCorreo ),
    validarCampos
], crearUsuario);

router.put('/:id',[
    validarJWT
], modificarUsuario);

router.delete('/:id', eliminarUsuario);

export default router;