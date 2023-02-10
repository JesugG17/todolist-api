import { Router } from 'express';
import { obtenerUsuarios,
         obtenerUsuario,
         crearUsuario,
         modificarUsuario,
         eliminarUsuario } from '../controllers/usuario.controller';


const router = Router();

router.get('/', obtenerUsuarios);

router.get('/:id', obtenerUsuario);

router.get('/', crearUsuario);

router.get('/:id', modificarUsuario);

router.get('/:id', eliminarUsuario);

export default router;