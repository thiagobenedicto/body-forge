import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateWorkoutDTO } from './dto/create-workout.dto';
import { UpdateWorkoutDTO } from './dto/update-workout.dto';
import { WorkoutService } from './workout.service';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { JwtPayload } from 'src/auth/interface/auth.interface';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) { }

  @Post()
  async createWorkout(
    @CurrentUser() user: JwtPayload,
    @Body() body: CreateWorkoutDTO,
  ) {
    return this.workoutService.createWorkout(body, user.sub);
  }

  @Get()
  async getAllWorkouts(@CurrentUser() user: JwtPayload) {
    if (user.isAdmin) return this.workoutService.listWorkouts({});

    return this.workoutService.listWorkouts({
      where: {
        userId: user.sub
      },
    });
  }

  @Get(':id')
  async getOneWorkout(@Param('id') id: string, @CurrentUser() user: JwtPayload) {
    return this.workoutService.getWorkout(Number(id), user);

  }

  @Put(':id')
  async updateWorkout(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload,
    @Body() body: UpdateWorkoutDTO,
  ) {
    return this.workoutService.updateWorkout(Number(id), body, user);
  }

  @Delete(':id')
  async deleteWorkout(@Param('id') id: string, @CurrentUser() user: JwtPayload) {
    if (!user.isAdmin) throw new UnauthorizedException('Only admin can delete workouts');

    return this.workoutService.deleteWorkout(Number(id));
  }
}
