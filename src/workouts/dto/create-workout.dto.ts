import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutDTO {
  @IsNotEmpty({ message: 'Property user cannot be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Property description cannot be empty' })
  @IsString()
  description: string;
}
