import { IsEmail } from "class-validator";
import { IsString, Min } from "class-validator/types/decorator/decorators";

export class CreateUsuarioDto {
    
    @IsString()
    @Min(1)
    nombre: string

    @IsString()

    @IsEmail()
    correo: string;

    @IsString()
    @Min(6)
    password: string;

}