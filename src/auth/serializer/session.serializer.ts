import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportSerializer } from '@nestjs/passport';

import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  async serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(id: number, done: CallableFunction) {
    const user = await this.userRepository.findOneBy({ id });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, createdAt, updatedAt, ...newUser } = user;

    return newUser ? done(null, newUser) : done(null, null);
  }
}
