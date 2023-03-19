import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

import { PaginationDto } from '../../common/dto';

export class ListOrdersDto extends PaginationDto {
  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  paid?: boolean;
}
