import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercices/exercises.module';
import { UserModule } from './users/user.module';
import { WorkoutModule } from './workouts/workout.module';

@Module({
  imports: [ExercisesModule, UserModule, WorkoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
