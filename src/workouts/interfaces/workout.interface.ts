import { WeekDay } from "@prisma/client";

export interface Workout {
  name: string;
  description: string;
  weekDay: WeekDay;
}
