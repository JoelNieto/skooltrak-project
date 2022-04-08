import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { AllExceptionsFilter } from './app/filters/all-exceptions.filter';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const config = new DocumentBuilder()
    .setTitle('Skooltrak API')
    .setDescription('Skootrak Education platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  app.setGlobalPrefix(globalPrefix);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
