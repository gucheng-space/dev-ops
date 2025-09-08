import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller';

@Module({
  controllers: [HelloWorldController],
  providers: [],
})
export class HelloWorldModule {}
