import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

import { CurrencyEnum } from '../../common/types';

export class PayOrderDto {
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsString()
  @IsEnum(CurrencyEnum)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Currency of the payment',
    example: CurrencyEnum.DOLAR,
  })
  currency: CurrencyEnum;
}
