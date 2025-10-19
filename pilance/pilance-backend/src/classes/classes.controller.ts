import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Get('studio/:studioId')
  async byStudio(@Param('studioId') studioId: string) {
    return this.classesService.findByStudio(Number(studioId));
  }

  @Post()
  async create(@Body() body: any) {
    return this.classesService.create(body);
  }
}
