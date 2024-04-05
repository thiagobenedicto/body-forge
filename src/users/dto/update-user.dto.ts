import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'Property id cannot be empty' })
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Property login cannot be empty' })
  login: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Property password cannot be empty' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}