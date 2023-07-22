import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import config from '../../../config';

export const validateJWT = async(req: Request, res: Response, next: NextFunction) => {

    const { 'x-token': token  } = req.headers ;

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            data: null,
            message: 'You must provide token to the application',
            code: StatusCodes.UNAUTHORIZED
        });
    }

    try {
        
        const { userId } = jwt.verify(token as string, config.SECRET_KEY) as { userId: number}
        
        // TODO: Make sure that request object can store userId
        
        next();

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            message: 'An error has ocurred while validating jwt...',
            code: StatusCodes.INTERNAL_SERVER_ERROR
        });
    }

}   
