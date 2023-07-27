import { Router } from 'express';
import { UploadController } from './upload.controller';
import { validateJWT } from '../../common/middlewares/validateJWT';

const router = Router();

const uploadController = new UploadController();

router.post('/profile',[
    validateJWT
], uploadController.uploadPhoto);

export default router;