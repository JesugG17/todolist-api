import { IsString, IsOptional, IsEmail } from 'class-validator/types/decorator/decorators';
export class UpdateUsuarioDto {

    @IsString()
    @IsEmail()
    @IsOptional()
    correo: string;

    @IsString()
    @IsOptional()
    password: string;

}