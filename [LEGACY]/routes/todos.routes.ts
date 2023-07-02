import { Router } from 'express';
import { check } from 'express-validator';

import { validarJWT } from '../middlewares/validarJWT';
import { validateInputs } from '../middlewares/validate-inputs';
import { createTodo, 
         getTodos, 
         updateTodo, 
         deleteTodo } from '../controllers/todos.controller';
import { existeTodoId } from '../helpers/validators';

const router = Router();

router.get('/',[
   validarJWT
], getTodos);

router.post('/',[
   validarJWT,
   check('description', 'la descripcion de la tarea es obligatoria').not().isEmpty(),
   validateInputs 
], createTodo);

router.put('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   check('description', 'la descripcion es obligatoria').not().isEmpty(),
   validateInputs
], updateTodo);

router.delete('/:id',[
   validarJWT,
   check('id').custom( existeTodoId ),
   validateInputs
], deleteTodo);


export default router;