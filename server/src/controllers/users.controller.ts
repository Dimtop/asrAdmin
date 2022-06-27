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
import { User } from '../models/users.model';
import { UsersPostBodyDTO, UsersPostResponseDTO } from '../dto/users.dto';
import { PasswordEncryptionInterceptor } from '../interceptors/passwordEncryption.interceptor';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { NoDuplicateUsers } from '../guards/userExists.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private configService: ConfigService,
  ) {}

  @NoDuplicateUsers()
  @UseInterceptors(PasswordEncryptionInterceptor)
  @Post('/')
  async createAdmin(
    @Body() usersPostDto: UsersPostBodyDTO,
  ): Promise<UsersPostResponseDTO> {
    return await this.usersService.create(usersPostDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:userId')
  async getUserById(@Param() params): Promise<any> {
    return this.usersService.getUserById(params.userId);
  }
}
