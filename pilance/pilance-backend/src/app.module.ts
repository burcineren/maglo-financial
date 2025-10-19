import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudiosModule } from './studios/studios.module';
import { ClassesModule } from './classes/classes.module';
import { SchedulesModule } from './schedules/schedules.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    StudiosModule,
    ClassesModule,
    SchedulesModule,
    BookingsModule,
    PaymentsModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
