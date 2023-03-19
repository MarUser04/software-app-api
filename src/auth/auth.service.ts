import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { compare, genSalt, hash } from 'bcrypt';
import { Repository } from 'typeorm';

// Dto
import { LoginDto, RegisterDto } from './dto';

// Entities
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(registerDto: RegisterDto): Promise<Partial<User>> {
    const salt = await genSalt();

    const usernameExists = await this.userRepository.exist({
      where: {
        username: registerDto.username,
      },
    });

    if (usernameExists) {
      throw new ConflictException('Usuario existente');
    }

    const user = this.userRepository.create({
      ...registerDto,
      role: 'admin',
      password: await this.hashPassword(registerDto.password, salt),
    });

    try {
      await this.userRepository.save(user);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, createdAt, updatedAt, ...newUser } = user;
      return newUser;
    } catch (e) {
      this.handleDBExceptions(e);
    }
  }

  async login(loginDto: LoginDto): Promise<Partial<User>> {
    const { username, password: loginPassword } = loginDto;

    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    if (!(await this.validatePassword(loginPassword, user.password))) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, createdAt, updatedAt, ...newUser } = user;
    return newUser;
  }

  private hashPassword = async (
    password: string,
    salt: string,
  ): Promise<string> => hash(password, salt);

  private validatePassword = async (
    loginPassword: string,
    password: string,
  ): Promise<boolean> => compare(loginPassword, password);

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check Server Logs',
    );
  }
}
