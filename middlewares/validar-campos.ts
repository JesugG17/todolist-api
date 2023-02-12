import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {

    const error = validationResult(req);
   
    if (!error.isEmpty()) {
        return res.json(error);
    }

    next();

}