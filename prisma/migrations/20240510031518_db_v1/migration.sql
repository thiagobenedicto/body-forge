-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
