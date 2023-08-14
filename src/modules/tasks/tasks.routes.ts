import { Router } from 'express';
import { check } from 'express-validator';
import { TaskController } from './tasks.controller';
import { validateJWT } from '../../common/middlewares/validateJWT';
import { catchErrors } from '../../common/middlewares';
import { tasksExists } from '../../common/utils/data-validators';

const router = Router();

const tasksController = new TaskController();

router.get('/all',[
    validateJWT
] ,tasksController.getAll);

router.post('/create',[
    validateJWT,
    check('description', 'Must send a description to create task').not().isEmpty(),
    catchErrors
], tasksController.create);

router.put('/update/:id',[
    validateJWT,
    check(':id').custom(tasksExists),
    catchErrors
], tasksController.update);

router.delete('/delete/:id',[
    validateJWT,
    check(':id').custom(tasksExists),
    catchErrors
], tasksController.deleteOne);

router.delete('/delete',[
    validateJWT,
    catchErrors
], tasksController.deleteMultiple);

export default router;