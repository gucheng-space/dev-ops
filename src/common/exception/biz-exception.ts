import { HttpException, HttpStatus } from '@nestjs/common';

export class BizException extends HttpException {
  constructor(
    msg: string,
    public bizCode: number = 1,
  ) {
    super({ message: msg, code: bizCode }, HttpStatus.OK);
  }
}
