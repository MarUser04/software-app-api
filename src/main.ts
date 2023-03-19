import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as session from 'express-session';
import { Client, ClientConfig } from 'pg';
import * as passport from 'passport';

import { CommonService } from './common/common.service';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const commonService = app.get(CommonService);
  await commonService.initCurrencies();

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const conObject: ClientConfig = {
    user: configService.get('dbUsername'),
    host: configService.get('dbHost'),
    database: configService.get('dbName'),
    password: configService.get('dbPassword'),
    port: configService.get('dbPort'),
  };

  const client = new Client(conObject);
  await client.connect();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const store = new (require('connect-pg-simple')(session))({
    conObject,
    createTableIfMissing: true,
  });

  app.use(
    session({
      store,
      secret: configService.get('SESSION_SECRET') || 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      }
    }),
  );

  app.enableCors({
    origin: configService.get('clientUrl'),
    credentials: true,
  });

  app.use(passport.initialize());
  app.use(passport.session());

  const options = new DocumentBuilder()
    .setTitle('Crazy Burger API')
    .setDescription('All application endpoints')
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = configService.get('port');

  await app.listen(port, () => {
    logger.log(`Application running on port ${port}`);
  });
}
bootstrap();
