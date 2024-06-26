import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from "@nestjs/common";
import { ExercisesService } from "./exercises.service";
import { CreateExerciseDTO } from "./dto/create-exercise.dto";
import { UpdateExerciseDTO } from "./dto/update-exercise.dto";


@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) { }

  @Post()
  async createExercise(@Body(new ValidationPipe()) exercisePayload: CreateExerciseDTO) {
    return this.exercisesService.createExercise(exercisePayload)
  }

  @Get()
  async getAllExercises() {
    return this.exercisesService.exercises({});
  }

  @Get(':id')
  async getOneExercise(@Param('id') id: string) {
    return this.exercisesService.exercise({ id: Number(id) });
  }

  @Put(':id')
  async updateExercise(@Param('id') id: string, @Body(new ValidationPipe()) exercisePayload: UpdateExerciseDTO) {
    return this.exercisesService.updateExercise({ where: { id: Number(id) }, data: exercisePayload })
  }
}