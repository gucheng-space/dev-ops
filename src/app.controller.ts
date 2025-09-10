import { Controller, Get, Post } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from './shared/prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private prismaHealth: PrismaHealthIndicator,
    private prisma: PrismaService,
  ) {}

  @Get('health')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.prismaHealth.pingCheck('prisma', this.prisma),
    ]);
  }

  @Post()
  create() {
    return this.prisma.health.create({ data: {} });
  }
}
