import { Response } from '@/types';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { responseMessage } from '../infra/utils/response';
import { RESPONSE_CODE, RESPONSE_MSG } from '../infra/enums';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map((data) =>
          responseMessage(data, RESPONSE_MSG.SUCCESS, RESPONSE_CODE.SUCCESS),
        ),
      ); // 把原始 data 包成 R
  }
}
