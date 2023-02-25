import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const validateInputs = (req: Request, res: Response, next: NextFunction) => {

    const error = validationResult(req);
   
    if (!error.isEmpty()) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    next();

}