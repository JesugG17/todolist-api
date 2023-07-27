import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {

    @IsString()
    userName: string;

    @IsString()
    @IsOptional()
    password?: string;

}