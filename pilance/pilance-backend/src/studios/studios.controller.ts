import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudiosService } from './studios.service';

@Controller('studios')
export class StudiosController {
  constructor(private studiosService: StudiosService) {}

  @Get()
  async all() {
    return this.studiosService.findAll();
  }

  @Get(':id')
  async one(@Param('id') id: string) {
    return this.studiosService.findById(Number(id));
  }

  @Post()
  async create(@Body() body: any) {
    return this.studiosService.create(body);
  }
}
