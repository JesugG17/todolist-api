import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const catchErrors = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            data: null,
            message: errors,
            code: StatusCodes.BAD_REQUEST,
        })
    }

    next();

}