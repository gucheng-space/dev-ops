import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { R } from '../dto/response.dto';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const [code, message] =
      exception instanceof HttpException
        ? [
            exception.getStatus(),
            (exception.getResponse() as any)?.message ?? exception.message,
          ]
        : [500, 'Internal error'];

    response.status(200).json(R.fail(code, message));
  }
}
