import { WeekDay } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateWorkoutExerciseDTO } from './create-workout.dto';

export class UpdateWorkoutExercisesDTO extends PartialType(CreateWorkoutExerciseDTO) {
  @IsNotEmpty({ message: 'Property id cannot be empty' })
  @IsNumber()
  id: number;
}

export class UpsertWorkoutExercisesDTO extends PartialType(UpdateWorkoutExercisesDTO) { }

export class UpdateWorkoutDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(WeekDay)
  weekDay: WeekDay;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  workoutExercisesToDelete: number[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpsertWorkoutExercisesDTO)
  workoutExercisesToUpsert: UpsertWorkoutExercisesDTO[];
}
