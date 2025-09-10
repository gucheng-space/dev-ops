import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { responseMessage } from '../infra/utils';
import { RESPONSE_MSG } from '../infra/enums';
import { Response } from '@/types';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(_: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return responseMessage(data, RESPONSE_MSG.SUCCESS, 0);
      }),
    );
  }
}
