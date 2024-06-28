import { Injectable } from '@nestjs/common';
import { Exercise } from './interfaces/exercise.interface';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) { }

  async exercise(
    exercisesWhereUniqueInput: Prisma.ExercisesWhereUniqueInput,
  ): Promise<Exercise | null> {
    return this.prisma.exercises.findUnique({
      where: exercisesWhereUniqueInput,
    });
  }

  async exercises(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExercisesWhereUniqueInput;
    where?: Prisma.ExercisesWhereInput;
    orderBy?: Prisma.ExercisesOrderByWithRelationInput;
  }): Promise<Exercise[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.exercises.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createExercise(data: Prisma.ExercisesCreateInput): Promise<Exercise> {
    return this.prisma.exercises.create({
      data,
    });
  }

  async updateExercise(params: {
    where: Prisma.ExercisesWhereUniqueInput;
    data: Prisma.ExercisesUpdateInput;
  }): Promise<Exercise> {
    const { data, where } = params;
    return this.prisma.exercises.update({
      data,
      where,
    });
  }

  async deleteExercise(
    where: Prisma.ExercisesWhereUniqueInput,
  ): Promise<Exercise> {
    return this.prisma.exercises.delete({
      where,
    });
  }
}
