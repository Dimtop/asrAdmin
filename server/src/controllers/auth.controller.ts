import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  Request,
  Res,
  UnauthorizedException,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../services/users.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const loginMetadata = await this.authService.login(req.user);
    if (loginMetadata.accessToken) {
      res.cookie('accessToken', loginMetadata.accessToken, {
        httpOnly: false,
        maxAge: this.configService.get('auth.jwt.expirationMilliseconds'),
        secure: false,
        sameSite: false,
      });
      res.cookie('userId', loginMetadata.id, {
        httpOnly: false,
        maxAge: this.configService.get('auth.jwt.expirationMilliseconds'),
        secure: false,
        sameSite: false,
      });
    } else {
      throw new UnauthorizedException('Υπήρξε κάποιο πρόβλημα.');
    }
  }
}
