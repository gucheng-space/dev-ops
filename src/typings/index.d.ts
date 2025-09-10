declare namespace Api {
  namespace Common {
    type Response<T> = {
      code: number;
      msg: string;
      data?: T;
      timestamp: number;
    };
  }
}
