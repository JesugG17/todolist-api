import { IsEmail, IsString, Min } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @Min(1)
    userName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Min(8)
    password: string;

}