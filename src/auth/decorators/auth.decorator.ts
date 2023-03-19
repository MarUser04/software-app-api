import { applyDecorators, UseGuards } from '@nestjs/common';

// Decorators
import { RoleProtected } from './role-protected.decorator';

// Guards
import { AuthenticatedGuard, UserRoleGuard } from '../guards';

// Interface
import { ValidRoles } from '../interfaces';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthenticatedGuard, UserRoleGuard),
  );
}
