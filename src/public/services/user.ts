import axios, {AxiosResponse} from 'axios';
import {
  LoginPayload,
  AutoLoginPayload,
  ForgetPasswordPayload,
} from './models/UserModels';

interface IOkResponse {
  ok: boolean;
  data: AxiosResponse;
}

interface IFailResponse {
  ok: boolean;
  data: any;
}

const okResponse = (res: AxiosResponse): IOkResponse => ({
  ok: true,
  data: res.data,
});

const failResponse = (err: any): IFailResponse => ({
  ok: false,
  data: err,
});

export const login = (payload: LoginPayload) => {
  return axios
    .post(
      `?rest_route=/simple-jwt-login/v1/auth&email=${payload.email}&password=${payload.password}&AUTH_KEY=THISISMySpeCiaLAUthCode`,
    )
    .then(res => {
      return okResponse(res);
    })
    .catch(err => {
      return failResponse(err);
    });
};

export const autoLogin = (payload: AutoLoginPayload) => {
  return axios
    .get(
      `?rest_route=/simple-jwt-login/v1/autologin&JWT=${payload.jwt}&AUTH_KEY=THISISMySpeCiaLAUthCode`,
    )
    .then(res => {
      return okResponse(res);
    })
    .catch(err => {
      return failResponse(err);
    });
};

export const forgetPassword = (payload: ForgetPasswordPayload) => {
  return axios
    .post(
      `?rest_route=/simple-jwt-login/v1/user/reset_password&email=${payload.email}&AUTH_KEY=THISISMySpeCiaLAUthCode`,
    )
    .then(res => {
      return okResponse(res);
    })
    .catch(err => {
      return failResponse(err);
    });
};
