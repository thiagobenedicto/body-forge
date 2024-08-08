/*
  Warnings:

  - You are about to drop the column `week_day` on the `Workout_Exercises` table. All the data in the column will be lost.
  - Added the required column `week_day` to the `Workouts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WeekDay" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO');

-- AlterTable
ALTER TABLE "Workout_Exercises" DROP COLUMN "week_day";

-- AlterTable
ALTER TABLE "Workouts" ADD COLUMN     "week_day" "WeekDay" NOT NULL;

-- DropEnum
DROP TYPE "weekDay";
