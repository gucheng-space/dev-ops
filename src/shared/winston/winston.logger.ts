import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';

export default () =>
  WinstonModule.createLogger({
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          format.ms(),
          format.prettyPrint(),
        ),
      }),
      new transports.File({ filename: 'logs/error.log', level: 'error' }),
      new transports.File({ filename: 'logs/combined.log' }),
    ],
  });
