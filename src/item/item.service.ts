import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindManyOptions, Like, Repository } from 'typeorm';

// Dto
import { PaginationDto } from '../common/dto';
import { CreateItemDto, UpdateItemDto } from './dto';

// Entities
import { Item } from './entities/item.entity';

// Types
import { IPagination } from '../common/types';

@Injectable()
export class ItemService {
  private readonly logger = new Logger(ItemService.name);

  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    try {
      const item = this.itemRepository.create({
        ...createItemDto,
      });

      await this.itemRepository.save(item);

      return item;
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<IPagination<Item[]>> {
    const {
      limit = 10,
      offset = 0,
      orderBy = 'id',
      orderDir = 'DESC',
      search = null,
    } = paginationDto;

    const queryOptions: FindManyOptions<Item> = {
      take: limit,
      skip: offset,
      order: {
        [orderBy]: orderDir,
      },
    };

    if (search) {
      queryOptions['where'] = { name: Like(`%${search}%`) };
    }

    try {
      const [result, total] = await this.itemRepository.findAndCount(
        queryOptions,
      );

      return {
        data: result,
        count: total,
      };
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException(`Item with ID: '${id}' not found`);
    }

    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.itemRepository.preload({
      id,
      ...updateItemDto,
    });

    if (!item) {
      throw new NotFoundException(`Item with ID: '${id}' not found`);
    }

    try {
      return this.itemRepository.save(item);
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.itemRepository.remove(item);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check Server Logs',
    );
  }
}
