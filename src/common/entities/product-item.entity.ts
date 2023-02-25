import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Entities
import { Product } from '../../product/entities/product.entity';
import { Item } from '../../item/entities/item.entity';

@Entity({ name: 'product_item' })
export class ProductToItem {
  @ApiProperty({
    description: 'Product Item ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Item, (item: Item) => item.productToItems, {
    onDelete: 'CASCADE',
  })
  // @JoinColumn({ name: 'id_item', referencedColumnName: 'id' })
  public item!: Item;

  @ManyToOne(() => Product, (product: Product) => product.items, {
    onDelete: 'CASCADE',
  })
  // @JoinColumn({ name: 'id_product', referencedColumnName: 'id' })
  public product!: Product;

  @Column('int', {
    nullable: false,
    unsigned: false,
  })
  public quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
