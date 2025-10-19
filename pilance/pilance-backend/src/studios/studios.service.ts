import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudiosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.studio.findMany();
  }

  async findById(id: number) {
    return this.prisma.studio.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.studio.create({ data });
  }
}
