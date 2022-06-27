import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const userValidationData = await this.authService.validateUser(
      username,
      password,
    );
    if (!userValidationData.isValid) {
      throw new UnauthorizedException(userValidationData.message);
    }
    return userValidationData.user;
  }
}
