import {
  applyDecorators,
  CanActivate,
  ExecutionContext,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs';
import { User, UserModel } from '../models/users.model';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(@InjectModel(User.name, 'admin') private userModel: UserModel) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const existingUser = await this.userModel.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      throw new HttpException('The user already exists.', HttpStatus.CONFLICT);
    }
    return true;
  }
}

export const NoDuplicateUsers = () => {
  return applyDecorators(UseGuards(UserExistsGuard));
};
