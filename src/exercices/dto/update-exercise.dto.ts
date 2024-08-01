import { MuscleGroup } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateExerciseDTO {

  @IsOptional()
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  name: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Property muscleGroup cannot be empty' })
  @IsEnum(MuscleGroup)
  muscleGroup: MuscleGroup;
}
