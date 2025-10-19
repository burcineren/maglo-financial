import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { userId: number; scheduleId: number }) {
    // basit kapasite kontrolü
    const schedule = await this.prisma.schedule.findUnique({
      where: { id: data.scheduleId },
      include: { bookings: true, class: true },
    });
    if (!schedule) throw new BadRequestException('Schedule not found');

    const capacity = schedule.class.capacity;
    const bookedCount = schedule.bookings.filter(b => b.status !== 'CANCELLED').length;
    if (bookedCount >= capacity) {
      throw new BadRequestException('Class is full');
    }

    return this.prisma.booking.create({
      data: {
        userId: data.userId,
        scheduleId: data.scheduleId,
        status: 'CONFIRMED'
      }
    });
  }

  async cancel(id: number) {
    return this.prisma.booking.update({
      where: { id },
      data: { status: 'CANCELLED' }
    });
  }
}
