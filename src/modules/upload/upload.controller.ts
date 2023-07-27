import { Request, Response } from "express";
import { UploadService } from "./upload.service";
import { Users } from "../auth/entities";
import { UploadedFile } from 'express-fileupload';
import { StatusCodes } from "http-status-codes";

export class UploadController {

    async uploadPhoto(req: Request, res: Response) {
        const uploadService = new UploadService();
        if (!req.files) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                data: null,
                message: 'No image was sent',
                code: StatusCodes.BAD_REQUEST
            });
        }
        
        const file = req.files.photo as UploadedFile;

        const response = await uploadService.uploadPhoto(file, req.userId as number);

        res.status(response.code).json(response);
    }

}