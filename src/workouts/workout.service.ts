import { Injectable } from '@nestjs/common';
import { Workout } from './interfaces/workout.interface';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkoutDTO } from './dto/create-workout.dto';
import { UpdateWorkoutDTO } from './dto/update-workout.dto';
import { JwtPayload } from 'src/auth/interface/auth.interface';

@Injectable()
export class WorkoutService {
  constructor(private prisma: PrismaService) { }

  async getWorkout(
    workoutId: number,
    user: JwtPayload
  ): Promise<Workout | null> {

    const whereCondition = user.isAdmin ? { id: workoutId } : { id: workoutId, AND: { userId: user.sub } };

    return this.prisma.workouts.findUnique({
      where: whereCondition,
    });
  }

  async listWorkouts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WorkoutsWhereUniqueInput;
    where?: Prisma.WorkoutsWhereInput;
    orderBy?: Prisma.WorkoutsOrderByWithRelationInput;
  }): Promise<Workout[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.workouts.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: {
        id: true,
        userId: true,
        name: true,
        description: true,
        weekDay: true,
        workoutExercises: {
          select: {
            id: true,
            reps: true,
            sets: true,
            weight: true,
            exercise: true,
          }
        }
      },
    });
  }

  async createWorkout(
    body: CreateWorkoutDTO,
    userId: number,
  ): Promise<Workout> {
    const workoutData: Prisma.WorkoutsUncheckedCreateInput = {
      ...body,
      userId,
      workoutExercises: {
        createMany: {
          data: body.workoutExercises.map(workoutExercise => ({
            exerciseId: workoutExercise.exerciseId,
            sets: workoutExercise.sets,
            reps: workoutExercise.reps,
            weight: workoutExercise.weight,
          }))
        }
      }
    };

    return this.prisma.workouts.create({
      data: workoutData,
      include: {
        workoutExercises: {
          include: {
            exercise: true
          }
        }
      }
    })
  };

  async updateWorkout(
    workoutId: number,
    updateData: UpdateWorkoutDTO,
    user: JwtPayload
  ): Promise<Workout> {

    const whereCondition = user.isAdmin ? { id: workoutId } : { id: workoutId, AND: { userId: user.sub } };

    const updatedWorkout = await this.prisma.workouts.update({
      where: whereCondition,
      data: {
        name: updateData.name,
        description: updateData.description,
        workoutExercises: {
          deleteMany: {
            workoutId: workoutId,
          },
          createMany: {
            data: updateData.workoutExercises.map(workoutExercise => ({ // HELP
              exerciseId: workoutExercise.exerciseId,
              sets: workoutExercise.sets,
              reps: workoutExercise.reps,
              weight: workoutExercise.weight,
              weekDay: workoutExercise.weekDay,
            })),
          },
        },
      },
    });

    return updatedWorkout;
  }

  async deleteWorkout(
    workoutId: number,
  ): Promise<Workout> {
    return this.prisma.workouts.delete({
      where: {
        id: workoutId
      }
    });
  };
}