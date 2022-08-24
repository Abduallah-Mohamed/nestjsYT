import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';
// import { HttpExceptionFilter } from './user/filters/user.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api/v1');

  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(3000);
}
bootstrap();
