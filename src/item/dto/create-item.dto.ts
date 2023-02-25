import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Item Name (Unique)',
    nullable: false,
    minLength: 3,
  })
  name: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: 'Item Quantity',
    nullable: false,
    minimum: 0,
  })
  quantity: number;
}
