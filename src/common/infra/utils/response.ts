import { Response } from '@/types';

export const responseMessage = <T = any>(
  data: T,
  msg: string,
  code: number,
): Response<T> => ({
  code,
  msg,
  data,
  timestamp: Date.now(),
});
