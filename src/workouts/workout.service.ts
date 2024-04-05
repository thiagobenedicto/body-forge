import { Injectable } from "@nestjs/common";
import { Workout } from "./interfaces/workout.interface";

@Injectable()
export class WorkoutService {
  private readonly workouts: Workout[] = []

  create(workout: Workout) {  
    this.workouts.push(workout)
  }

  findAll(): Workout[] {
    return this.workouts
  }

  findOne(id: number): Workout {
    return this.workouts.find(workout => workout.id === id)
  }

  update(id: number, workoutPayload: Workout) {
    const index = this.workouts.findIndex(workout => workout.id === id)
    this.workouts[index] = workoutPayload
  }

  remove(id: number) {
    const index = this.workouts.findIndex(workout => workout.id === id)
    this.workouts.splice(index, 1)
  }
}