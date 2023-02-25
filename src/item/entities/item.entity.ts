import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProductToItem } from '../../common/entities/product-item.entity';

@Entity({ name: 'items' })
export class Item {
  @ApiProperty({
    description: 'Item ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Item Name' })
  @Column('text', {
    nullable: false,
    unique: true,
  })
  name: string;

  @ApiProperty({ description: 'Item Quantity' })
  @Column('int', {
    nullable: true,
  })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProductToItem, (productToItem) => productToItem.item)
  public productToItems!: ProductToItem[];
}
