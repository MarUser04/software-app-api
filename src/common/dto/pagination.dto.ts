import { ApiProperty } from '@nestjs/swagger';

import { IsInt, IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'How many rows do you need',
    required: false,
  })
  @IsPositive()
  @IsOptional()
  @Type(() => Number) // enableImplicitConversions: true
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'How many rows do you want to skip',
    required: false,
  })
  @IsInt()
  @Min(0)
  @IsOptional()
  @Type(() => Number) // enableImplicitConversions: true
  offset?: number;

  @ApiProperty({
    default: 'id',
    description: 'Order By Column',
    required: false,
  })
  @IsString()
  @IsOptional()
  orderBy?: string;

  @ApiProperty({
    default: 'DESC',
    description: 'Order Direction',
    required: false,
  })
  @IsString()
  @IsOptional()
  orderDir?: string;

  @ApiProperty({
    default: '',
    description: 'Search By Name',
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;
}
