import jwt from 'jsonwebtoken';
import config from '../../../config';

export const generateJWT = ( userId: number ) => {

    return new Promise((resolve, reject) => {

        jwt.sign({ userId }, config.SECRET_KEY, { 
            expiresIn: '1h'
        }, (error, token) => {

            if (error) {
                reject();
            } else {
                resolve(token);
            }
        })

    });

}