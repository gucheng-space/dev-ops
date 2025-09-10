import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return process.uptime();
  }

  @Post()
  get201() {
    return { status: 'ok' };
  }
}
