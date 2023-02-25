import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';

// Entities
import { Product } from './entities/product.entity';

// Modules
import { CommonModule } from '../common/common.module';
import { ItemModule } from '../item/item.module';

// import { OrderModule } from '../order/order.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CommonModule,
    ItemModule,
    // forwardRef(() => OrderModule),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService, TypeOrmModule],
})
export class ProductModule {}
