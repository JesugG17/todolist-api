import { Router } from 'express';

import { validarJWT } from '../helpers/validarJWT';

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

router.post('/', crearUsuario);

router.put('/:id', modificarUsuario);

router.delete('/:id', eliminarUsuario);

export default router;