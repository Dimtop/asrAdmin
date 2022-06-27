import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { encrypt, decrypt } from '../utils';
import { UsersPostBodyDTO } from '../dto/users.dto';

@Injectable()
export class PasswordEncryptionInterceptor implements NestInterceptor {
  constructor(private configService: ConfigService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const encryptionData = await encrypt(
      req.body.password,
      this.configService.get('encryption.secret'),
    );

    req.body = {
      ...req.body,
      password: encryptionData,
    };
    return next.handle();
  }
}
