import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

import { CreateOrderDto } from './create-order.dto';

import { OrderStatusWithoutPlaced } from '../enum/order-status.enum';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsNumber()
  @IsEnum(OrderStatusWithoutPlaced)
  @IsOptional()
  @ApiProperty({
    description: 'Order Status',
    example: OrderStatusWithoutPlaced.IN_PROCESS,
    enum: OrderStatusWithoutPlaced,
  })
  readonly status: number;
}
