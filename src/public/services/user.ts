import axios from 'axios';
import {LoginPayload} from './models/UserModels';

export const login = (payload: LoginPayload) => {
  return axios
    .post(
      `?rest_route=/simple-jwt-login/v1/auth&email=${payload.email}&password=${payload.password}&AUTH_KEY=THISISMySpeCiaLAUthCode`,
    )
    .then(res => {
      return {
        ok: true,
        data: res.data,
      };
    })
    .catch(err => {
      return {
        ok: false,
        data: err,
      };
    });
};
