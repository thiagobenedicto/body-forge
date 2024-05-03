import { Module } from '@nestjs/common';
import { ExercisesModule } from './exercices/exercises.module';
import { UserModule } from './users/user.module';
import { WorkoutModule } from './workouts/workout.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [ExercisesModule, UserModule, WorkoutModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule { }
