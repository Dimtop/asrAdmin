import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { IGenericResponse } from '../interfaces';

/**
 * todo handle errors
 */
@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, IGenericResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IGenericResponse<T>> {
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => ({
        statusCode: res.statusCode,
        success: true,
        data,
      })),
    );
  }
}
