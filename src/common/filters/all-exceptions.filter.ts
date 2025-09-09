import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { R } from '../dto/response.dto';
import { BizException } from '../exception/biz-exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    /* 1. 业务异常 → HTTP 200，body 里给业务码 */
    if (exception instanceof BizException) {
      return res.status(200).json(R.fail(exception.message, exception.bizCode));
    }

    /* 2. 其他 HttpException → 用它的 HTTP 码 */
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const msg =
        (exception.getResponse() as any)?.message ?? exception.message;
      const bizCode = status >= 400 && status < 500 ? 10000 + status : 50000;
      return res.status(status).json(R.fail(msg, bizCode));
    }

    /* 3. 兜底系统错误 */
    return res.status(500).json(R.fail('Internal error', 50000));
  }
}
