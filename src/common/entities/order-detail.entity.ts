import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';

@Entity({ name: 'order_detail' })
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Order, (order: Order) => order.orderDetails, {
    onDelete: 'CASCADE',
  })
  public order!: Order;

  @ManyToOne(() => Product, (product: Product) => product.orderDetails, {
    onDelete: 'CASCADE',
  })
  public product!: Product;
}
