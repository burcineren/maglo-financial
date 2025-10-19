import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get('class/:classId')
  async byClass(@Param('classId') classId: string) {
    return this.schedulesService.findByClass(Number(classId));
  }

  @Post()
  async create(@Body() body: any) {
    return this.schedulesService.create(body);
  }
}
