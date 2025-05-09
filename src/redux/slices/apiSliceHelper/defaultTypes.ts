interface EndpointMessage {
  successMessage?: string;
  errorMessage?: string;
}

export interface ApiSliceExtraOptions {
  headersContentType?: 'none' | 'custom';
  messages?: EndpointMessage;
}

export interface ApiSliceResponseDto<T> {
  timestamp: string;
  success: boolean;
  data: T;
  message: string;
  errorCode: number;
}
