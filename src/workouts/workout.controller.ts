import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('workout')
export class WorkoutController {
  @Post()
  async createWorkout(@Body() workoutPayload: any) { // Fix using DTO
    return 'This action adds a new workout'
  }

  @Get()
  async getAllWorkouts() {
    return 'This returns all workouts'
  }

  @Get(':id')
  async getOneWorkout(@Param('id') id: string) {
    console.log(id);
    return `returns #${id} workout`
  }

  @Put(':id')
  async updateWorkout(@Param('id') id: string, @Body() workoutPayload: any) { // Fix with DTO
    return `this updates #${id} workout`
  }

  @Delete(':id')
  async deleteWorkout(@Param('id') id: string) {
    return `this deletes #${id} workout`
  }
}