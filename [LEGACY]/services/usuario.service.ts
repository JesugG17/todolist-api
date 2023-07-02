import bcrypt from "bcrypt";

import { Usuario } from "../models/Usuario.model";
import { UpdateUsuarioDto } from "../models/update.user.dto";

export class UsuarioService {
    
  static async findAll() {
    const { count, rows: usuarios } = await Usuario.findAndCountAll({
      where: {
        estatus: true,
      },
    });
    console.log(usuarios);
    return { count, usuarios };
  }

  static async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const { password } = updateUsuarioDto;

    if (password) {
      const salt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(password, salt);
      updateUsuarioDto.password = hashedPassword;
    }

    const usuario = await Usuario.findByPk(id);

    await usuario?.update(updateUsuarioDto);

    return usuario;
  }

  static async delete(id: number) {
    const usuario = await Usuario.findByPk(id);

    await usuario?.update({estatus: false});

    return usuario;
  }
}
