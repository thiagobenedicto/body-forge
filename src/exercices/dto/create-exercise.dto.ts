import { IsEnum, IsNotEmpty, IsNumber } from "class-validator"
import { MuscleGroup } from "../interfaces/exercise.interface"

export class CreateExerciseDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEnum(MuscleGroup)
  muscle_group: MuscleGroup
}