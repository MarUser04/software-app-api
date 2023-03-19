import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { OrderService } from './order.service';

// DTO
import {
  CreateOrderDto,
  ListOrdersDto,
  PayOrderDto,
  UpdateOrderDto,
} from './dto';

// Entities
import { Order } from './entities/order.entity';

// Guards
import { Auth } from '../auth/decorators/auth.decorator';

// Interfaces
import { ValidRoles } from '../auth/interfaces';

@ApiTags('Orders')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @Auth(ValidRoles.ADMIN)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Order was created',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Orders were listed',
    type: [Order],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  findAll(@Query() listOrdersDto: ListOrdersDto) {
    return this.orderService.findAll(listOrdersDto);
  }

  @Get(':id')
  @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Order was retrieved',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Order Not Found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Order was updated',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Order Not Found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Patch(':id/pay')
  @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Order paid',
    type: Order,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Order Not Found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  payOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() payOrderDto: PayOrderDto,
  ) {
    return this.orderService.payOrder(id, payOrderDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Order was deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Order Not Found',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.remove(id);
  }
}
