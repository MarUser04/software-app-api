import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Currency } from '../../common/entities/currency.entity';
import { OrderDetail } from '../../common/entities/order-detail.entity';

import { OrderStatusEnum } from '../enum/order-status.enum';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  clientName: string;

  @Column({
    enum: OrderStatusEnum,
    type: 'enum',
    default: OrderStatusEnum.ON_HOLD,
  })
  status: OrderStatusEnum;

  @Column('numeric')
  originalAmount: number;

  @Column('numeric', {
    nullable: true,
  })
  paidAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  public orderDetails!: OrderDetail[];

  @ManyToOne(() => Currency, (currency: Currency) => currency.orders, {
    onDelete: 'CASCADE',
  })
  public currency!: Currency;
}
