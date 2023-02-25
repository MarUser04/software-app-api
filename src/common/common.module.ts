import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { CommonService } from './common.service';

// Entity
import { ProductToItem } from './entities/product-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductToItem])],
  // providers: [CommonService],
  exports: [
    TypeOrmModule,
    // CommonService
  ],
})
export class CommonModule {}
