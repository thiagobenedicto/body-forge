/*
  Warnings:

  - Changed the type of `muscle_group` on the `Exercises` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS', 'LEGS', 'ABS');

-- AlterTable
ALTER TABLE "Exercises" DROP COLUMN "muscle_group",
ADD COLUMN     "muscle_group" "MuscleGroup" NOT NULL;
