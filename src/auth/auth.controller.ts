import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBasicAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';

// Decorators
import { GetUser } from './decorators';

// DTO
import { RegisterDto } from './dto';

// Entities
import { User } from './entities/user.entity';

// Guards
import { BasicAuthGuard } from './guards';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  private logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User registered',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Email already exists',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  async register(
    @Body() registerDto: RegisterDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const user = await this.authService.register(registerDto);

    request.logIn(user, (err) => {
      if (err) {
        this.logger.error(err);
        return response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Hubo un error al registrar');
      }

      response.status(HttpStatus.OK).json(user);
    });
  }

  @Post('login')
  @UseGuards(BasicAuthGuard)
  @ApiBasicAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User logged-in',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
  })
  async login(@GetUser() user: User) {
    return user;
  }

  @Delete('logout')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User logged-out',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  logout(@Req() req: Request, @Res() res: Response): void {
    req.session.destroy(async (err) => {
      if (err) {
        this.logger.error(err);
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Error al cerrar sesión');
      }

      await res.clearCookie('connect.sid');
      res.status(HttpStatus.NO_CONTENT).send();
    });
  }

  @Get('active')
  active(@GetUser() user: User) {
    return user;
  }
}
