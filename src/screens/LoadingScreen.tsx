import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '../assets/themes';
import CText from '../components/CText';
import GlobalStyles from '../public/styles/GlobalStyles';

const LoadingScreen = () => {
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
