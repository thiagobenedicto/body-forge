import { IsNotEmpty } from 'class-validator';

export class CreateExerciseDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  muscleGroup: string;
}
