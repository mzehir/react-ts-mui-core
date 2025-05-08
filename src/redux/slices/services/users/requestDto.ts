import { UserType } from '../../../../utils/enums/userTypes';

export interface SignInResponseDto {
  token: string;
}

export interface VerifySignInResponseDto {
  token: string;
  useType: UserType;
  authendicatedUserResponseDto: {
    username: string;
    surname: string;
    phone: string;
    email: string;
  };
}
