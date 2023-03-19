import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DataSource, FindManyOptions, In, Like, Repository } from 'typeorm';

// DTO
import {
  CreateOrderDto,
  ListOrdersDto,
  PayOrderDto,
  UpdateOrderDto,
} from './dto';

// Entities
import { Order } from './entities/order.entity';
import { OrderDetail } from '../common/entities/order-detail.entity';

// Services
import { CommonService } from '../common/common.service';
import { ProductService } from '../product/product.service';

// Types
import { IPagination } from '../common/types';
import { OrderStatusEnum } from './enum/order-status.enum';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,

    private readonly commonService: CommonService,
    private readonly productService: ProductService,

    private readonly dataSource: DataSource,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { clientName, products } = createOrderDto;

    const orderProducts = await Promise.all(
      products.map((product) =>
        this.productService.findOnePopulated(product.id),
      ),
    );

    let orderTotal = 0;

    // Check if there is enough ingredients available
    for (let i = 0; i < orderProducts.length; i++) {
      const orderProduct = orderProducts[i];
      const product = products[i];

      orderTotal += orderProduct.price * product.quantity;

      for (const item of orderProduct.items) {
        const qty = item.quantity * product.quantity;
        if (item.item.quantity < qty)
          throw new BadRequestException(
            `No hay suficiente "${item.item.name}" en el inventario`,
          );
      }
    }

    // Create Query Runner
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const order = this.orderRepository.create({
      clientName,
      status: OrderStatusEnum.ON_HOLD,
      originalAmount: orderTotal,
    });

    try {
      await queryRunner.manager.save(order);
    } catch (e) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(e);
    }

    try {
      for (let i = 0; i < orderProducts.length; i++) {
        const orderProduct = orderProducts[i];
        const quantity = products[i].quantity;

        const orderDetail = this.orderDetailRepository.create({
          order,
          product: orderProduct,
          quantity,
        });

        await queryRunner.manager.save(orderDetail);
      }

      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(e);
    }

    return order;
  }

  async findAll(listOrdersDto: ListOrdersDto): Promise<IPagination<Order[]>> {
    const {
      limit = 10,
      offset = 0,
      orderBy = 'id',
      orderDir = 'DESC',
      search = null,
      paid = false,
    } = listOrdersDto;

    const queryOptions: FindManyOptions<Order> = {
      take: limit,
      skip: offset,
      order: {
        [orderBy]: orderDir,
      },
    };

    let statusOptions = [
      OrderStatusEnum.CANCELLED,
      OrderStatusEnum.ON_HOLD,
      OrderStatusEnum.IN_PROCESS,
      OrderStatusEnum.FINALIZED,
    ];

    if (paid) {
      statusOptions = [OrderStatusEnum.PAID];
      queryOptions.relations = {
        currency: true,
      };
    }

    queryOptions.where = {
      status: In(statusOptions),
    };

    if (search) {
      queryOptions.where = {
        ...queryOptions.where,
        clientName: Like(`%${search}%`),
      };
    }

    try {
      const [data, count] = await this.orderRepository.findAndCount(
        queryOptions,
      );

      return { data, count };
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: {
        orderDetails: {
          product: true,
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID: ${id} not found`);
    }

    return this.mapPopulatedOrder(order);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const { clientName, status, products: orderProducts = [] } = updateOrderDto;

    const order = await this.orderRepository.findOne({
      where: { id },
      relations: {
        orderDetails: {
          product: {
            items: {
              item: true,
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID: ${id} not found`);
    }

    const products = await Promise.all(
      orderProducts.map((product) =>
        this.productService.findOnePopulated(product.id),
      ),
    );

    let orderTotal = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const orderProduct = orderProducts[i];

      orderTotal += product.price * orderProduct.quantity;
    }

    if (
      order.status === OrderStatusEnum.CANCELLED &&
      status !== OrderStatusEnum.CANCELLED
    ) {
      throw new BadRequestException(
        'No se puede cambiar el estado de esta orden',
      );
    }

    if (
      order.status === OrderStatusEnum.FINALIZED &&
      [OrderStatusEnum.ON_HOLD, OrderStatusEnum.IN_PROCESS].includes(status)
    ) {
      throw new BadRequestException(
        'El estado de la orden solo se puede cambiar a entregada o cancelada',
      );
    }

    // Create Query Runner
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const orderDetails: OrderDetail[] = [];
      if (orderProducts.length > 0) {
        for (const orderDetail of order.orderDetails) {
          await queryRunner.manager.remove(orderDetail);
        }

        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          const quantity = orderProducts[i].quantity;

          const orderDetail = this.orderDetailRepository.create({
            product,
            quantity,
            order,
          });

          await queryRunner.manager.save(orderDetail);

          orderDetails.push(orderDetail);
        }
      }

      if (order.status !== status) {
        if (
          order.status === OrderStatusEnum.IN_PROCESS &&
          status === OrderStatusEnum.FINALIZED
        ) {
          // Subtract quantity from ingredient on inventory
          for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const orderProductQuantity = orderProducts[i].quantity;

            for (const item of product.items) {
              const itemQuantity = item.quantity;
              item.item.quantity -= itemQuantity * orderProductQuantity;

              await queryRunner.manager.save(item.item);
            }
          }
        }

        order.status = status;
      }

      if (order.clientName && order.clientName !== clientName)
        order.clientName = clientName;

      if (orderDetails.length > 0) {
        order.orderDetails = orderDetails;
        order.originalAmount = orderTotal;
      }

      await queryRunner.manager.save(order);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.mapPopulatedOrder(order);
    } catch (e) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(e);
    }
  }

  async payOrder(id: number, payOrderDto: PayOrderDto) {
    const order = await this.orderRepository.findOne({
      where: { id },
    });

    if (order.status !== OrderStatusEnum.FINALIZED) {
      throw new BadRequestException(
        'La orden no se puede pagar en este estado',
      );
    }

    try {
      const { amount, currency } = payOrderDto;

      order.paidAmount = amount;
      order.status = OrderStatusEnum.PAID;
      order.currency = await this.commonService.getCurrencyByName(currency);

      await this.orderRepository.save(order);

      return order;
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
  }

  private mapPopulatedOrder = (order: any): Promise<any> => ({
    ...order,
    orderDetails: order.orderDetails.map((orderDetail) => ({
      detailId: orderDetail.id,
      productId: orderDetail.product.id,
      quantity: orderDetail.quantity,
      name: orderDetail.product.name,
      price: orderDetail.product.price,
    })),
  });

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check Server Logs',
    );
  }
}
