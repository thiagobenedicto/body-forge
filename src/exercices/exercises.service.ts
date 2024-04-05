import { Injectable } from '@nestjs/common';
import { Exercise } from './interfaces/exercise.interface';

@Injectable()
export class ExercisesService {
  private readonly exercises: Exercise[] = []

  async create(exercise: Exercise) {
    this.exercises.push(exercise)
  }

  findAll(): Exercise[] {
    return this.exercises
  }

  findOne(id: number): Exercise { 
    return this.exercises.find(exercise => exercise.id === Number(id))
  }

  update(id: number, exercisePayload: Exercise) {
    const index = this.exercises.findIndex(exercisePayload => exercisePayload.id === id)
    this.exercises[index] = exercisePayload
  }

  remove(id: number) {
    const index = this.exercises.findIndex(exercise => exercise.id === id)
    this.exercises.splice(index, 1)
  }
}
