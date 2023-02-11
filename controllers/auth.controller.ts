import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import { Usuario } from '../models/Usuario.model';

export const logIn = async(req: Request, res: Response) => {

    const { correo, password } = req.body;
    console.log('Hola moundo');
    try {
        
    } catch (error) {
        
    }

    res.json({ msg: 'log in'});
}