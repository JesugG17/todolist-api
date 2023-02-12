import { Router } from 'express';
import { validarJWT } from '../middlewares/validarJWT';
import { validarCampos } from '../middlewares/validar-campos';

import { crearTodo, 
         obtenerTodos, 
         obtenerTodo, 
         actualizarTodo, 
         eliminarTodo } from '../controllers/todos.controller';
import { check } from 'express-validator';

const router = Router();

router.get('/', obtenerTodos);

router.get('/:id', obtenerTodo);

router.post('/',[
   validarJWT,
   check('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
   validarCampos 
], crearTodo);

router.put('/:id', actualizarTodo);

router.delete('/:id', eliminarTodo);

export default router;