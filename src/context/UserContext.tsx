import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, ReactNode, useState} from 'react';
import {userServices} from '../public/services';
import {
  ForgetPasswordPayload,
  LoginPayload,
} from '../public/services/models/UserModels';
import NavigationServices from '../routes/NavigationServices';

interface UserContextProps {
  children: ReactNode;
}

interface UserContextValue {
  user: any;
  loading: boolean;
  userLogin: (payload: LoginPayload) => {} | void;
  forgetPassword: (payload: ForgetPasswordPayload) => {} | void;
}

export const UserContext = createContext<UserContextValue>({} as any);

const UserContextProvider = (props: UserContextProps) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const userLogin = async (payload: LoginPayload) => {
    setLoading(true);
    const response = await userServices.login(payload);

    if (response.ok) {
      setUser(response.data);
      await AsyncStorage.setItem('BEARER_TOKEN', response.data.data.jwt);
      const autoLoginResponse = await userServices.autoLogin({
        jwt: response.data.data.jwt as string,
      });

      if (autoLoginResponse.ok) {
        setLoading(false);
        NavigationServices.replace('Main', {
          url: 'https://tropika.on-dev.info/#',
          token: response.data.data.jwt,
        });
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
      console.log('error : ', JSON.stringify(response.data));
    }
  };

  const forgetPassword = async (payload: ForgetPasswordPayload) => {
    setLoading(true);
    const response = await userServices.forgetPassword(payload);

    if (response.ok) {
      setLoading(false);
      NavigationServices.navigate('EmailSent');
    } else {
      setLoading(false);
      console.log('gagal sent email : ', response.data);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        userLogin,
        forgetPassword,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
