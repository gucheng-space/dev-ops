declare namespace Api {
  namespace Common {
    /**
     * @description: 全局响应体
     */
    type Response<T = any> = {
      code: number;
      mes: string;
      data?: T;
      timestamp: number;
    };

    /**
     * @description: 分页响应体
     */
    type PageResponse<T = any> = {
      current?: number; // 页码
      size?: number; // 当前页条数
      total?: number; // 总条数
      records: T[]; // 业务数据
    };
  }
}
