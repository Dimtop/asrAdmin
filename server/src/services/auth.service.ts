import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { decrypt } from '../utils';
import { ConfigService } from '@nestjs/config';
import { IUserValidationData } from '../interfaces';
import { UserDocument } from '../models/users.model';
import { IUserLoginReponseDTO } from '../dto/users.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<IUserValidationData> {
    const user = await this.usersService.findOne(username);

    if (user) {
      const decryptedData = await decrypt(
        user.password.buffer,
        this.configService.get('encryption.secret'),
        user.password.iv,
      );
      if (decryptedData.decryptedTextString === password) {
        return {
          user,
          isValid: true,
          message: '',
        };
      }
      return {
        isValid: false,
        message: 'Wrong password',
      };
    }

    return {
      isValid: false,
      message: 'Wrong username',
    };
  }

  async login(user: UserDocument): Promise<IUserLoginReponseDTO> {
    return {
      accessToken: this.jwtService.sign({
        id: user._id.toString(),
        username: user.username,
        role: user.role,
      }),
      id: user._id.toString(),
    };
  }
}
