import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateWorkoutDTO {
  @IsNotEmpty({ message: 'Property id cannot be empty' })
  @IsNumber()
  id: number

  @IsNotEmpty({ message: 'Property user_id cannot be empty'})
  @IsNumber()
  user_id: number

  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string

  @IsNotEmpty({ message: 'Property description cannot be empty' })
  @IsString()
  description: string
}