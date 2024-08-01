import { WeekDay } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';

class UpdateWorkoutExercisesDTO {
  @IsNotEmpty({ message: 'Property exerciseId cannot be empty' })
  @IsNumber()
  exerciseId: number;

  @IsOptional()
  @IsNumber()
  sets: number;

  @IsOptional()
  @IsNumber()
  reps: number;

  @IsOptional()
  @IsNumber()
  weight: number;

  @IsOptional()
  @IsEnum(WeekDay)
  weekDay: WeekDay;

}

export class UpdateWorkoutDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateWorkoutExercisesDTO)
  workoutExercises: UpdateWorkoutExercisesDTO[];
}
