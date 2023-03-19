import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonService } from './common.service';

// Entity
import { Currency } from './entities/currency.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { ProductToItem } from './entities/product-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency, OrderDetail, ProductToItem])],
  providers: [CommonService],
  exports: [TypeOrmModule, CommonService],
})
export class CommonModule {}
