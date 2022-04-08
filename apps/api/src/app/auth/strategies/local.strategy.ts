import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async validate({ body }: any, username: string, password: string) {
    const { role } = body;
    const user = await this.authService.validateUser(
      { username, password },
      role
    );
    return user;
  }
}
