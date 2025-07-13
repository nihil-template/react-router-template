import { data } from 'react-router';

import type { ApiError } from '@/_entities/common';

interface CreateErrorResponseProps {
  status: number;
  message: string;
  errors?: Record<string, string[] | undefined>;
  headers?: HeadersInit;
}

export function createErrorResponse({
  status,
  message,
  errors,
  headers = {},
}: CreateErrorResponseProps) {
  const errorBody: ApiError = {
    success: false,
    result: null,
    status,
    message,
    errors,
  };

  return data(errorBody, {
    status,
    statusText: message,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}
