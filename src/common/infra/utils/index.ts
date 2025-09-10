import { Response } from '@/types';
import dayjs from 'dayjs';
import { RESPONSE_CODE, RESPONSE_MSG } from '../enums';

/**
 * @description: 统一返回体
 */
export const responseMessage = <T = any>(
  data: T,
  mes: string = RESPONSE_MSG.SUCCESS,
  code: number = RESPONSE_CODE.SUCCESS,
): Response<T> => ({
  code,
  mes,
  data,
  timestamp: dayjs().valueOf(),
});
