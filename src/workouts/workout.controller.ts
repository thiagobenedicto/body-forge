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
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { Payload } from 'src/auth/interface/auth.interface';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) { }

  @Post()
  async createWorkout(
    @CurrentUser() userId: number,
    @Body() body: CreateWorkoutDTO,
  ) {
    return this.workoutService.createWorkout(body, userId);
  }

  @Get()
  async getAllWorkouts(@CurrentUser() user: Payload) {
    return this.workoutService.workouts({
      where: {
        userId: user.sub
      },
    });
  }

  @Get(':id')
  async getOneWorkout(@Param('id') id: string, @CurrentUser() userId: number) {
    return this.workoutService.workout({
      id: Number(id),
      AND: {
        userId: userId
      }
    });
  }

  @Put(':id')
  async updateWorkout(
    @Param('id') id: string,
    @CurrentUser() userId: number,
    @Body() workoutPayload: UpdateWorkoutDTO,
  ) {
    return this.workoutService.updateWorkout({
      where: {
        id: Number(id),
        AND: {
          userId: userId
        }
      },
      data: workoutPayload,
    });
  }
}
