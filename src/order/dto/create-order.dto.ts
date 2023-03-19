import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Client Name ',
    nullable: false,
    minLength: 3,
  })
  clientName: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Product)
  @ApiProperty({
    description: 'Array List with Product IDs and Quantity',
    isArray: true,
    nullable: false,
    example: [{ id: 1, quantity: 1 }],
  })
  products: Product[];
}

export class Product {
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Product (Item) ID',
    nullable: false,
    minimum: 1,
  })
  id: number;

  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Product Quantity',
    nullable: false,
    minimum: 1,
  })
  quantity: number;
}
