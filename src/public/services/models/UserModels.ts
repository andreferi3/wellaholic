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
  dob: string;
}
