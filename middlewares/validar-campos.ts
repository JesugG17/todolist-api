import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validarCampos = (req: Request, res: Response) => {

    const error = validationResult(req);

    if (error) {
        return res.json(error);
    }

}