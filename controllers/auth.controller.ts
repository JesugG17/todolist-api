import { Request, Response } from "express";

export const logIn = async(req: Request, res: Response) => {
    res.json({
        msg: 'Log in'
    });
}