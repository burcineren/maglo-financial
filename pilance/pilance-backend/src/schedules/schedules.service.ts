import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async findByClass(classId: number) {
    return this.prisma.schedule.findMany({ where: { classId } });
  }

  async create(data: any) {
    return this.prisma.schedule.create({ data });
  }
}
