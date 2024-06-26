export enum MuscleGroup {
  biceps,
  triceps,
  shoulders,
  chest,
  back,
  legs,
  abs
}

export interface Exercise {
  id: number,
  name: string,
  muscleGroup: string,
}