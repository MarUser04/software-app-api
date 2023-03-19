import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductToItem } from '../../common/entities/product-item.entity';
import { OrderDetail } from '../../common/entities/order-detail.entity';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Product Name' })
  @Column('text', {
    nullable: false,
    unique: true,
  })
  name: string;

  @ApiProperty({ description: 'Product Price' })
  @Column('float', {
    nullable: false,
  })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProductToItem, (productToItem) => productToItem.product)
  public items!: ProductToItem[];

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  public orderDetails!: OrderDetail[];
}
