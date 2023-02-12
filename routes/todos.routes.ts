import { Router } from 'express';
import { check } from 'express-validator';

import { validarJWT } from '../middlewares/validarJWT';
import { validarCampos } from '../middlewares/validar-campos';
import { crearTodo, 
         obtenerTodos, 
         obtenerTodo, 
         actualizarTodo, 
         eliminarTodo } from '../controllers/todos.controller';
import { existeTodoId } from '../helpers/validators';

const router = Router();

router.get('/',[
   validarJWT
], obtenerTodos);

router.get('/:id', obtenerTodo);

router.post('/',[
   validarJWT,
   check('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
   validarCampos 
], crearTodo);

router.put('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   check('description', 'la descripcion es obligatoria').not().isEmpty(),
   validarCampos
], actualizarTodo);

router.delete('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   validarCampos
], eliminarTodo);

export default router;