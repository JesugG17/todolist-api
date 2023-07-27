import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto  {

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;

}