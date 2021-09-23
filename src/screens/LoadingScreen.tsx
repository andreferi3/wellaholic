import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '../assets/themes';
import CText from '../components/CText';
import AsyncStorage from '@react-native-community/async-storage';

import GlobalStyles from '../public/styles/GlobalStyles';
import NavigationServices from '../routes/NavigationServices';

const LoadingScreen = () => {
  const [token, setToken] = useState<string | null>();
  const [, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      return NavigationServices.replace('Main');
    } else {
      return NavigationServices.replace('Auth');
    }
  }, [token]);

  useEffect(() => {
    fetchInitialize();
  }, []);

  const fetchInitialize = async () => {
    await AsyncStorage.getItem('BEARER_TOKEN')
      .then(value => {
        setLoading(false);
        setToken(value);
      })
      .catch(() => {
        setLoading(false);
      });
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
