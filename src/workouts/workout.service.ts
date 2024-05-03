import { Injectable } from "@nestjs/common";
import { Workout } from "./interfaces/workout.interface";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class WorkoutService {
  constructor(private prisma: PrismaService) {}

  async workout(workoutsWhereUniqueInput: Prisma.WorkoutsWhereUniqueInput
  ): Promise<Workout | null> {
    return this.prisma.workouts.findUnique({
      where: workoutsWhereUniqueInput,
    });
  }

  async workouts(params: {
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
    });
  }

  async createWorkout(data: Prisma.WorkoutsCreateInput): Promise<Workout> {
    return this.prisma.workouts.create({
      data,
    });
  }

  async updateWorkout(params: {
    where: Prisma.WorkoutsWhereUniqueInput;
    data: Prisma.WorkoutsUpdateInput;
  }): Promise<Workout> {
    const { data, where } = params;
    return this.prisma.workouts.update({
      data,
      where,
    });
  }

  async deleteWorkout(where: Prisma.WorkoutsWhereUniqueInput): Promise<Workout> {
    return this.prisma.workouts.delete({
      where,
    });
  }
}