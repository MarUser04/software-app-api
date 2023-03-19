import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CurrencyEnum } from '../types';

import { Order } from '../../order/entities/order.entity';

@Entity({ name: 'currencies' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: CurrencyEnum,
    default: CurrencyEnum.DOLAR,
  })
  name: CurrencyEnum;

  @OneToMany(() => Order, (order) => order.currency)
  public orders!: Order[];
}
