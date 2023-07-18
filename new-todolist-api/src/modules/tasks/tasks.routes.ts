import { Router } from 'express';
import { TaskController } from './tasks.controller';

const router = Router();

const tasksController = new TaskController();

router.post('/create', tasksController.create);

export default router;