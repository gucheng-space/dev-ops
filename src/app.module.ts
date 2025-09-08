import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { SystemModule } from './modules/system/system.module';

@Module({
  imports: [PrismaModule, SystemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
