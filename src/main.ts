import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const post = process.env.POST || 3000;
  app.setGlobalPrefix('api');
  // 校验

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
