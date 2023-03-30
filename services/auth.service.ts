import bcrypt from 'bcrypt';

import { CreateUsuarioDto } from '../models/create-user.dto';
import { Usuario } from '../models/Usuario.model';
import { generarJWT } from '../helpers/generarJWT';

export class AuthService {


    static async find(createUsuarioDto: CreateUsuarioDto) {
        
        const { correo, password } = createUsuarioDto;

        const usuario = await Usuario.findOne({
            where: {
                correo
            }
        });

        if (!usuario || !usuario.estatus) {
            throw new Error(`El usuario con el correo ${ correo } no existe`);
        }

        const isValidPassword = bcrypt.compareSync(password, usuario.password);

        if (!isValidPassword) {
            throw new Error('La contraseña es incorrecta');
        }

        const token = await generarJWT( usuario.usuarioid );

        return { token, usuario }
    }

    static async create(createUsuarioDto: CreateUsuarioDto) {
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(createUsuarioDto.password, salt);
        
        const newUser = {
            ...createUsuarioDto,
            password: hashedPassword,
            estatus: true
        }

        return await Usuario.create( newUser );
    }
}