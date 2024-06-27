import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkoutDTO } from './dto/create-workout.dto';
import { UpdateWorkoutDTO } from './dto/update-workout.dto';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) { }

  @Post()
  async createWorkout(
    @Body() workoutPayload: CreateWorkoutDTO,
  ) {
    return this.workoutService.createWorkout(workoutPayload);
  }

  @Get()
  async getAllWorkouts() {
    return this.workoutService.workouts({});
  }

  @Get(':id')
  async getOneWorkout(@Param('id') id: string) {
    return this.workoutService.workout({ id: Number(id) });
  }

  @Put(':id')
  async updateWorkout(
    @Param('id') id: string,
    @Body() workoutPayload: UpdateWorkoutDTO,
  ) {
    return this.workoutService.updateWorkout({
      where: { id: Number(id) },
      data: workoutPayload,
    });
  }
}
