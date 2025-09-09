export class R<T> {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly data: T,
  ) {}
  static ok<T>(data: T, msg = 'success'): R<T> {
    return new R(0, msg, data);
  }
  static fail(code: number, msg: string): R<null> {
    return new R(code, msg, null);
  }
}
