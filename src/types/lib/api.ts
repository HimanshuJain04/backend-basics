export type StandardApiResponseType = {
  responseId: string;
  success: boolean;
  message: string;
};

export type ApiResponseType<T> = StandardApiResponseType & {
  result: T;
};

export type ApiResponseTypeWithPagination<T> = StandardApiResponseType & {
  result: {
    data: T;
    totalItems: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
  };
};
