export interface ApiResponseDto<T> {
  timestamp: string;
  success: boolean;
  data: T;
  message: string;
  errorCode: number;
}
//! Auth DTO
export interface SignInResponseDto {
  token: string;
}

export interface VerifySignInResponseDto {
  token: string;
  authendicatedUserResponseDto: {
    username: string;
    surname: string;
    phone: string;
  };
}
//! Farmer DTO
export interface GetFarmersResponseDto {
  id: number;
  phone: string;
  name: string;
  surname: string;
  state: string;
  lastLoginDate: string;
  userType: string;
}
//! Worker DTO
export interface GetWorkersResponseDto {
  id: number;
  phone: string;
  name: string;
  surname: string;
  state: string;
  lastLoginDate: string;
  userType: string;
}
//! Merchant DTO
export interface GetMerchantsResponseDto {
  id: number;
  phone: string;
  name: string;
  surname: string;
  state: string;
  lastLoginDate: string;
  userType: string;
}
//! Product DTO
export interface CreateProductRequestDto {
  name: string;
  description: string;
}

export interface CreateProductResponseDto {
  id: string;
  name: string;
  description: string;
}
export interface GetProductsResponseDto {
  id: number;
  description: string;
  name: string;
}
export interface GetProductByIdResponseDto {
  id: number;
  description: string;
  name: string;
}
export interface UpdateProductRequestDto {
  name: string;
  description: string;
}
export interface UpdateProductResponseDto {
  id: number;
  name: string;
  description: string;
}
