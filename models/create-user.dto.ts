import { IsEmail } from "class-validator";
import { IsString } from "class-validator/types/decorator/decorators";

export class CreateUsuarioDto {
    
    @IsString()
    @IsEmail()
    correo: string;

    @IsString()
    password: string;

}