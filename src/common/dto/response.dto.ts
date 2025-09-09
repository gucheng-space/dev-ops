export class R<T> {
  constructor(
    public readonly code: number,
    public readonly messsage: string,
    public readonly data: T,
  ) {}
  static ok<T>(data: T, msg = 'success'): R<T> {
    return new R(0, msg, data);
  }
  static fail(msg: string, code = 1): R<null> {
    return new R(code, msg, null);
  }
}
