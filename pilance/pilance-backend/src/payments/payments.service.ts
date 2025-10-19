import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async createPayment(bookingId: number, amount: number, provider = 'TEST') {
    return this.prisma.payment.create({
      data: { bookingId, amount, provider, status: 'PENDING' }
    });
  }

  async markPaid(paymentId: number, providerRef?: string) {
    return this.prisma.payment.update({
      where: { id: paymentId },
      data: { status: 'PAID', providerRef }
    });
  }
}
