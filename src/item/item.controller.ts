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

import { ItemService } from './item.service';

// Dto
import { CreateItemDto, UpdateItemDto } from './dto';
import { PaginationDto } from '../common/dto';

// Entities
import { Item } from './entities/item.entity';

// Guards
// import { Auth } from '../auth/decorators/auth.decorator';

// Interfaces
// import { ValidRoles } from '../auth/interfaces';

@ApiTags('Items')
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  // @Auth(ValidRoles.ADMIN)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Item was created',
    type: Item,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  // @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Items were listed',
    type: [Item],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.itemService.findAll(paginationDto);
  }

  @Get(':id')
  // @Auth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Item was retrieved',
    type: Item,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Item Not Found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemService.findOne(id);
  }

  @Patch(':id')
  // @Auth(ValidRoles.ADMIN, ValidRoles.COCINERO)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Item was updated',
    type: Item,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Item Not Found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  // @Auth(ValidRoles.ADMIN)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Item was deleted',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Item Not Found',
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
    return this.itemService.remove(id);
  }
}
