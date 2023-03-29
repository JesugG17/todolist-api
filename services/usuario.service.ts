import { Usuario } from '../models/Usuario.model';
import bcrypt from 'bcrypt';
import { Request } from 'express';
// TODO: HACER EL SERVICE DE LOS 

export class UsuarioService {


    static async findAll() {

        const { count, rows: usuarios } = await Usuario.findAndCountAll({
            where: {
                estatus: true
            }
        });
        console.log(usuarios);
        return { count, usuarios };
    }

    static async update(req: Request) {
        const id = req.usuario?.usuarioid;
        const { password, ...cambios } = req.body;

        if (password) {
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(password, salt);
            cambios.password = hashedPassword;
        }

        const usuario = await Usuario.findByPk( id );

        await usuario?.update( cambios );

        return usuario;
    }

    static async delete(req: Request) {
        const id = req.usuario?.usuarioid;

        const usuario = await Usuario.findByPk( id );

        await usuario?.update({ estatus: false });

        return usuario;
    }


}