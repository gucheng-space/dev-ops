import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddlewar implements NestMiddleware {
  private logger = new Logger();
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    const { method, originalUrl, ip, httpVersion, headers } = req;
    const { statusCode } = res;

    res.on('finish', () => {
      const end = Date.now();
      const duration = end - start;

      const logFromat = `${Date.now()} ${method} ${originalUrl} HTTP/${httpVersion} ${ip} ${statusCode} ${duration}ms ${headers['user-agent']}`;

      if (statusCode >= 500) {
        this.logger.error(logFromat, originalUrl);
      } else if (statusCode >= 400) {
        this.logger.error(logFromat, originalUrl);
      } else {
        this.logger.log(logFromat, originalUrl);
      }
    });

    next();
  }
}
