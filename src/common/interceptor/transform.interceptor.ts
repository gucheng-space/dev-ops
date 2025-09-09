import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { R } from '../dto/response.dto';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, R<T>> {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<R<T>> {
    return next.handle().pipe(map((data) => R.ok(data)));
  }
}
