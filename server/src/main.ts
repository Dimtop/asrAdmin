import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
  console.log('Listening to: ' + process.env.PORT);
}
bootstrap();
