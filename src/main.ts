import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { AppValidationPipe } from './common/pipes/validation.pipe';
import winstonLogger from './shared/winston/winston.logger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: winstonLogger() });
  const post = process.env.POST || 3000;
  app.setGlobalPrefix('api');
  // 校验
  app.useGlobalPipes(AppValidationPipe());
  // 拦截器
  app.useGlobalFilters(new AllExceptionsFilter());
  // 安全 & 跨域
  app.use(helmet());
  app.enableCors();
  // swagger
  const config = new DocumentBuilder()
    .setTitle('DevOps API')
    .setDescription('DevOps 接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(post);
  console.log(`Swagger is running on http://localhost:${post}/api/docs`);
}
bootstrap();
