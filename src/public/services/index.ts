import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// * Services
import * as userServices from './user';

axios.defaults.baseURL = 'https://tropika.on-dev.info/';

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('BEARER_TOKEN');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  errors => Promise.reject(errors),
);

export {userServices};
