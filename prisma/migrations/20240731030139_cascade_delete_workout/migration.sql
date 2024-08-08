-- DropForeignKey
ALTER TABLE "Workout_Exercises" DROP CONSTRAINT "Workout_Exercises_workout_id_fkey";

-- AddForeignKey
ALTER TABLE "Workout_Exercises" ADD CONSTRAINT "Workout_Exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "Workouts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
