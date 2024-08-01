import { MuscleGroup } from "@prisma/client";

export interface Exercise {
  id: number;
  name: string;
  muscleGroup: MuscleGroup;
}
