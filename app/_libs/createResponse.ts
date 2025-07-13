import { data } from 'react-router';

import type { ApiResponse } from '@/_entities/common';

interface CreateResponseProps<T> {
  result: T;
  status?: number;
  message: string;
  headers?: HeadersInit;
}

export function createResponse<T>({
  result,
  status = 200,
  message,
  headers = {},
}: CreateResponseProps<T>) {
  const responseBody: ApiResponse<T> = {
    success: true,
    result,
    status,
    message,
  };

  return data(responseBody, {
    status,
    statusText: message,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};
