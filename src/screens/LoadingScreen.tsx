import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '../assets/themes';
import CText from '../components/CText';
import AsyncStorage from '@react-native-community/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import GlobalStyles from '../public/styles/GlobalStyles';
import NavigationServices from '../routes/NavigationServices';
import {userServices} from '../public/services';

const LoadingScreen = () => {
  useEffect(() => {
    fetchInitialize();
  }, []);

  const fetchInitialize = async () => {
    const jwt = await AsyncStorage.getItem('BEARER_TOKEN');

    const dynamicLink = await dynamicLinks().getInitialLink();

    if (dynamicLink?.url) {
      if (dynamicLink.utmParameters?.utm_campaign === 'change-password') {
        if (dynamicLink.utmParameters?.utm_source) {
          const source = dynamicLink.utmParameters.utm_source.split('&');
          console.log(source);

          return NavigationServices.navigate('ChangePassword', {
            email: source[0],
            code: source[1],
          });
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
