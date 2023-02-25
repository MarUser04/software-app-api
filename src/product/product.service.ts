import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DataSource, FindManyOptions, Like, Repository } from 'typeorm';

// Dto
import { PaginationDto } from '../common/dto';
import { CreateProductDto, UpdateProductDto } from './dto';

// Entities
import { Product } from './entities/product.entity';
import { ProductToItem } from '../common/entities/product-item.entity';

// Services
import { ItemService } from '../item/item.service';

// Types
import { IPagination } from '../common/types';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductToItem)
    private readonly productToItemRepository: Repository<ProductToItem>,

    private readonly itemService: ItemService,

    private readonly dataSource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { items: ingredients, ...productData } = createProductDto;

    const items = await Promise.all(
      ingredients.map((ingredient) => this.itemService.findOne(ingredient.id)),
    );

    // Create Query Runner
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const product = this.productRepository.create(productData);

    try {
      await queryRunner.manager.save(product);
    } catch (e) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(e);
    }

    try {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const quantity = ingredients[i].quantity;

        const productToItem = this.productToItemRepository.create({
          item,
          product,
          quantity,
        });

        await queryRunner.manager.save(productToItem);
      }

      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(e);
    }

    return product;
  }

  async findAll(paginationDto: PaginationDto): Promise<IPagination<Product[]>> {
    const {
      limit = 10,
      offset = 0,
      orderBy = 'id',
      orderDir = 'DESC',
      search = null,
    } = paginationDto;

    const queryOptions: FindManyOptions<Product> = {
      take: limit,
      skip: offset,
      order: {
        [orderBy]: orderDir,
      },
    };

    if (search) {
      queryOptions.where = { name: Like(`%${search}%`) };
    }

    try {
      const [data, count] = await this.productRepository.findAndCount(
        queryOptions,
      );

      return { data, count };
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check Server Logs',
    );
  }
}
