import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ExercisesService } from "./exercises.service";
import { CreateExerciseDTO } from "./dto/create-exercise.dto";
import { UpdateExerciseDTO } from "./dto/update-exercise.dto";

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Post()
  async createExercise(@Body() exercisePayload: CreateExerciseDTO) {
    this.exercisesService.create(exercisePayload)
    return exercisePayload
  }
  
  @Get()
  async getAllExercises() {
    return this.exercisesService.findAll()
  }

  @Get(':id')
  async getOneExercise(@Param('id') id: number) {
    return this.exercisesService.findOne(id)
  }

  @Put(':id')
  async updateExercise(@Param('id') id: number, @Body() userPayload: UpdateExerciseDTO) {
    this.exercisesService.update(id, userPayload)
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: number) {
    this.exercisesService.remove(id)
  }
}