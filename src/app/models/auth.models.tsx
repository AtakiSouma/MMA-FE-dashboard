export interface CurrentUser {
  id: string;
  email: string;
  photoUrl: string;
  avatar: string;
  password?: string;
  name: string;
  role: string;
}

export interface UserRegisterParams {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface userLoginParams {
  email: string;
  password: string;
}
