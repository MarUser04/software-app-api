import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { User } from './entities/user.entity';

// Auth
import { BasicAuthGuard } from './guards';
import { BasicStrategy } from './passport/strategies/basic.strategy';
import { SessionSerializer } from './serializer/session.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // Authentication
    BasicStrategy,
    BasicAuthGuard,
    SessionSerializer,
  ],
  exports: [PassportModule],
})
export class AuthModule {}
