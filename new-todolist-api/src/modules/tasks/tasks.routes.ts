import { Router } from 'express';
import { TaskController } from './tasks.controller';
import { validateJWT } from '../../common/middlewares/validateJWT';

const router = Router();

const tasksController = new TaskController();

router.get('/all',[
    validateJWT
] ,tasksController.getAll);

router.post('/create', tasksController.create);

router.put('/update/:id', tasksController.update);

router.delete('/delete/:id', tasksController.delete);

export default router;