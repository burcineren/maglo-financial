import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  async create(@Body() body: any) {
    return this.paymentsService.createPayment(body.bookingId, body.amount, body.provider);
  }
}
