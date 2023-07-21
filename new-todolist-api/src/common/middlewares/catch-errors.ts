import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const catchErrors = (req: Request, res: Response, next: NextFunction) => {

    const error = validationResult(req).formatWith(({ msg }) => msg);

    const normalizedErrors = error.array().map( error => error);

    const hasError = !error.isEmpty();

    if (hasError) {
        return res.json({
            data: null,
            messages: normalizedErrors,
            code: StatusCodes.BAD_REQUEST,
        })
    }

    next();

}