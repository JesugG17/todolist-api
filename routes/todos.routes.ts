import { Router } from 'express';

import { crearTodo, 
         obtenerTodos, 
         obtenerTodo, 
         actualizarTodo, 
         eliminarTodo } from '../controllers/todos.controller';

const router = Router();

router.get('/', obtenerTodos);

router.get('/:id', obtenerTodo);

router.post('/', crearTodo);

router.put('/:id', actualizarTodo);

router.delete('/:id', eliminarTodo);

export default router;