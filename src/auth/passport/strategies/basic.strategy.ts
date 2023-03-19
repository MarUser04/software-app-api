import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { BasicStrategy as Strategy } from 'passport-http';

import { AuthService } from '../../auth.service';

import { User } from '../../entities/user.entity';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy, 'basic') {
  /**
   * Create Basic Strategy
   */
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * Method that executes on login and extracts username and password from Basic Auth via Authorization Header.
   *
   * @param {string} username - username of the user
   * @param {string} password - password of the user
   */
  async validate(username: string, password: string): Promise<Partial<User>> {
    return this.authService.login({
      username,
      password,
    });
  }
}
