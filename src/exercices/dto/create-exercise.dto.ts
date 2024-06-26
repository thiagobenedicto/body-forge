import { IsEnum, IsNotEmpty, IsNumber } from "class-validator"
import { MuscleGroup } from "../interfaces/exercise.interface"

export class CreateExerciseDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  muscleGroup: string
}