export interface LoginPayload {
  email: string;
  password: string;
}

export interface AutoLoginPayload {
  jwt: string;
}

export interface ForgetPasswordPayload {
  email: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  user_meta: {yith_birthday: string};
}

export interface ChangePasswordPayload {
  email: string;
  new_password: string;
  code: string;
}
