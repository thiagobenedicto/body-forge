/*
  Warnings:

  - The values [CHEST,BACK,SHOULDERS,LEGS] on the enum `MuscleGroup` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `date` on the `Workout_Exercises` table. All the data in the column will be lost.
  - Added the required column `week_day` to the `Workout_Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "weekDay" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO');

-- AlterEnum
BEGIN;
CREATE TYPE "MuscleGroup_new" AS ENUM ('PEITO', 'COSTAS', 'OMBRO', 'TRICEPS', 'BICEPS', 'PANTURRILHA', 'QUADRICEPS', 'POSTERIOR', 'ABS');
ALTER TABLE "Exercises" ALTER COLUMN "muscle_group" TYPE "MuscleGroup_new" USING ("muscle_group"::text::"MuscleGroup_new");
ALTER TYPE "MuscleGroup" RENAME TO "MuscleGroup_old";
ALTER TYPE "MuscleGroup_new" RENAME TO "MuscleGroup";
DROP TYPE "MuscleGroup_old";
COMMIT;

-- AlterTable
ALTER TABLE "Workout_Exercises" DROP COLUMN "date",
ADD COLUMN     "week_day" "weekDay" NOT NULL;
