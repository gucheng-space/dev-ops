import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { R } from '../dto/response.dto';
import { Response } from 'express';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, R<T>> {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<R<T>> {
    const res: Response = ctx.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => {
        res.status(res.statusCode);
        return R.ok(data);
      }),
    );
  }
}
