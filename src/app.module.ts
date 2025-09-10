import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validationSchema } from './config/joi.validation';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60,
        limit: 10,
      },
    ]),
    PrismaModule,
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
