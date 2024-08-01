import { WeekDay } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

class CreateWorkoutExerciseDTO {
  @IsNotEmpty({ message: 'Property exerciseId cannot be empty' })
  @IsNumber()
  exerciseId: number;

  @IsNotEmpty({ message: 'Property sets cannot be empty' })
  @IsNumber()
  sets: number;

  @IsNotEmpty({ message: 'Property reps cannot be empty' })
  @IsNumber()
  reps: number;

  @IsNotEmpty({ message: 'Property weight cannot be empty' })
  @IsNumber()
  weight: number;

}

export class CreateWorkoutDTO {
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Property description cannot be empty' })
  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWorkoutExerciseDTO) // hehehehehehehe ainda bem que fizemos o code review
  workoutExercises: CreateWorkoutExerciseDTO[];

  @IsNotEmpty({ message: 'Property weekDay cannot be empty' })
  @IsEnum(WeekDay)
  weekDay: WeekDay;
}
