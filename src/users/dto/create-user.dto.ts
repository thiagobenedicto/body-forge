import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Property login cannot be empty' })
  login: string;

  @IsNotEmpty({ message: 'Property password cannot be empty' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}