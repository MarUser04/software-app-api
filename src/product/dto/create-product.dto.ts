import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Product Name (Unique)',
    nullable: false,
    minLength: 5,
  })
  name: string;

  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Product Price',
    nullable: false,
    minimum: 1,
  })
  price: number;

  // @IsArray()
  // @ArrayNotEmpty()
  // @IsNumber({}, { each: true })
  // @ApiProperty({
  //   description: 'Array List with Ingredient Ids',
  //   uniqueItems: true,
  //   isArray: true,
  //   nullable: false,
  //   example: [1],
  // })
  // items: number[];

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Ingredient)
  @ApiProperty({
    description: 'Array List with Ingredient Ids and Quantity',
    isArray: true,
    nullable: false,
    example: [{ id: 1, quantity: 1 }],
  })
  items: Ingredient[];
}

export class Ingredient {
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Ingredient (Item) ID',
    nullable: false,
    minimum: 1,
  })
  id: number;

  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Ingredient Quantity',
    nullable: false,
    minimum: 1,
  })
  quantity: number;
}
