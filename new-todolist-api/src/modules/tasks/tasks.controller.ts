import { Request, Response } from "express";

export class TaskController {


    create(req: Request, res: Response) {

        res.json({ msg: 'its working' });
    }

}