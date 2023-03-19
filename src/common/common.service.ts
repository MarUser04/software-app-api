import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Currency } from './entities/currency.entity';
import { CurrencyEnum } from './types';

@Injectable()
export class CommonService {
  private readonly logger = new Logger(CommonService.name);

  constructor(
    @InjectRepository(Currency)
    private readonly currencyRepository: Repository<Currency>,
  ) {}

  async initCurrencies() {
    try {
      const count = await this.currencyRepository.count();

      if (count > 0) return;

      await Promise.all([
        this.currencyRepository.save({ name: CurrencyEnum.DOLAR }),
        this.currencyRepository.save({ name: CurrencyEnum.PESOS }),
        this.currencyRepository.save({ name: CurrencyEnum.BOLIVARES }),
      ]);
    } catch (e) {
      this.logger.error(e?.message);
      throw new InternalServerErrorException(e?.message);
    }
  }

  async getCurrencyByName(name: CurrencyEnum): Promise<Currency> {
    const currency = this.currencyRepository.findOneBy({ name });

    if (!currency) {
      throw new NotFoundException('Moneda no encontrada');
    }

    return currency;
  }
}
