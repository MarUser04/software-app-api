import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Config
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

// Modules
import { CommonModule } from './common/common.module';
import { ItemModule } from './item/item.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('dbHost'),
        port: +configService.get('dbPort'),
        database: configService.get('dbName'),
        username: configService.get('dbUsername'),
        password: configService.get('dbPassword'),
        autoLoadEntities: true,
        synchronize: true, // Must be true only on development
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    ItemModule,
    ProductModule,
  ],
})
export class AppModule {}
