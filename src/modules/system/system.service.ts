import { PrismaService } from '@/shared/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  constructor(private readonly prisma: PrismaService) {}

  async checkPrisma() {
    const res = this.prisma.health.create({ data: {} });
    return res;
  }
}
