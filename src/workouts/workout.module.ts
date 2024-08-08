import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService],
  imports: [PrismaModule],
})
export class WorkoutModule {}
