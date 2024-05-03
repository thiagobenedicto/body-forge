import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator"
import { MuscleGroup } from "../interfaces/exercise.interface"

export class UpdateExerciseDTO {
  @IsNotEmpty({ message: 'Property id cannot be empty'})
  @IsNumber()
  id: number

  @IsOptional()
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  name: string

  @IsOptional()
  @IsNotEmpty({ message: 'Property muscle_group cannot be empty'})
  muscle_group: string
}