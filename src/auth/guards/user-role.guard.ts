import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Observable } from 'rxjs';

import { META_ROLES } from '../decorators';

import { User } from '../entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  private readonly logger = new Logger(UserRoleGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );

    this.logger.debug(UserRoleGuard.name, { validRoles });

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    this.logger.debug(UserRoleGuard.name, { user });

    if (!user) throw new BadRequestException('Usuario no encontrado');

    if (validRoles.find((role) => role === user.role)) return true;

    throw new ForbiddenException(`Papi tú no puede' hacer eso`);
  }
}
