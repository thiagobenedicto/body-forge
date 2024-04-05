import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateWorkoutDTO {
  @IsNotEmpty({ message: 'Property id cannot be empty' })
  @IsNumber()
  id: number

  @IsOptional()
  @IsNotEmpty({ message: 'Property user_id cannot be empty'})
  @IsNumber()
  user_id: number

  @IsOptional()
  @IsNotEmpty({ message: 'Property name cannot be empty' })
  @IsString()
  name: string

  @IsOptional()
  @IsNotEmpty({ message: 'Property description cannot be empty' })
  @IsString()
  description: string
}