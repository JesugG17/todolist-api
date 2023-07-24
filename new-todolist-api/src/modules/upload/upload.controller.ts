import { Request, Response } from "express";

export class UploadController {

    async uploadPhoto(req: Request, res: Response) {

        res.json({ msg: 'hola' });
    }

}