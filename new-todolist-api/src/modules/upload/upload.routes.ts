import { Router } from 'express';
import { UploadController } from './upload.controller';

const router = Router();

const uploadController = new UploadController();

router.post('/profile', uploadController.uploadPhoto);

export default router;