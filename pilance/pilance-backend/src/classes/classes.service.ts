import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async findByStudio(studioId: number) {
    return this.prisma.class.findMany({ where: { studioId } });
  }

  async create(data: any) {
    return this.prisma.class.create({ data });
  }
}
