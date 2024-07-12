import { IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {
  @IsNotEmpty({ message: 'Property login cannot be empty' })
  @IsString()
  login: string;

  @IsNotEmpty({ message: 'Property password cannot be empty' })
  password: string;
}