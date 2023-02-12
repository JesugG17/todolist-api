import jwt from 'jsonwebtoken';
import config from '../config';

export const generarJWT = ( id: number ) => {

    return new Promise((resolve, reject) => {
        
        const payload = { id };

        jwt.sign( payload, config.SECRETKEY, {
            expiresIn: '1d'
        }, (err, token) => {

            if (err) {
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });

    });

}