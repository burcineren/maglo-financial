import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  async create(@Body() body: any) {
    return this.bookingsService.create(body);
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    return this.bookingsService.cancel(Number(id));
  }
}
