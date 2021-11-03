import React, {useEffect} from 'react';
import {View, ActivityIndicator, Linking} from 'react-native';
import {Colors} from '../assets/themes';
import CText from '../components/CText';
import AsyncStorage from '@react-native-community/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import GlobalStyles from '../public/styles/GlobalStyles';
import NavigationServices from '../routes/NavigationServices';
import {userServices} from '../public/services';
import {iOS} from '../public/helper/GlobalHelper';

const LoadingScreen = () => {
  useEffect(() => {
    fetchInitialize();
  }, []);

  const fetchInitialize = async () => {
    let source: any;

    const jwt = await AsyncStorage.getItem('BEARER_TOKEN');

    const dynamicLink = await dynamicLinks().getInitialLink();

    if (iOS && !dynamicLink?.url) {
      const url = await Linking.getInitialURL();
      const screenIndex = url?.indexOf('utm_campaign=change-password');

      if (screenIndex) {
        if (screenIndex > -1) {
          const txt = 'utm_source=';
          const sourceIndex = url?.lastIndexOf('utm_source=') as number;
          const sourceRes = url?.substr(sourceIndex);
          const cidIndex = sourceRes?.indexOf('&cid') as number;

          const utmSource = url?.substr(
            sourceIndex + txt.length,
            cidIndex - txt.length,
          );

          source = utmSource?.split('%26');

          return NavigationServices.replace('ChangePassword', {
            email: source[0],
            code: source[1],
          });
        }
      }
    } else {
      if (dynamicLink?.url) {
        if (dynamicLink.utmParameters?.utm_campaign === 'change-password') {
          if (dynamicLink.utmParameters?.utm_source) {
            console.log(dynamicLink.utmParameters?.utm_source);
            source = dynamicLink.utmParameters.utm_source.split('&');
            return NavigationServices.replace('ChangePassword', {
              email: source[0],
              code: source[1],
            });
          }
        }
      }
    }

    if (jwt !== null) {
      const response = await userServices.autoLogin({jwt});

      if (response.ok) {
        return NavigationServices.replace('Main', {
          url: 'https://tropika.on-dev.info/#',
          token: jwt,
        });
      }
    } else {
      return NavigationServices.replace('Auth');
    }
  };

  return (
    <View
      style={[
        GlobalStyles.flexFill,
        GlobalStyles.justifyContentCenter,
        GlobalStyles.alignCenter,
      ]}>
      <ActivityIndicator size="large" color={Colors.$primary} />
      <CText bold color={Colors.$primary} style={[GlobalStyles.mt2]}>
        Checking User
      </CText>
    </View>
  );
};

export default LoadingScreen;
