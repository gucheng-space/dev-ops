import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloWorldController {
  @Get()
  gteHello() {
    return 'hello';
  }
}
