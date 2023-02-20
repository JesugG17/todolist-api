import { Router } from 'express';
import { check } from 'express-validator';

import { validarJWT } from '../middlewares/validarJWT';
import { validateInputs } from '../middlewares/validar-campos';
import { crearTodo, 
         obtenerTodos, 
         actualizarTodo, 
         eliminarTodo } from '../controllers/todos.controller';
import { existeTodoId } from '../helpers/validators';

const router = Router();

router.get('/',[
   validarJWT
], obtenerTodos);

router.post('/',[
   validarJWT,
   check('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
   validateInputs 
], crearTodo);

router.put('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   check('description', 'la descripcion es obligatoria').not().isEmpty(),
   validateInputs
], actualizarTodo);

router.delete('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   validateInputs
], eliminarTodo);


export default router;