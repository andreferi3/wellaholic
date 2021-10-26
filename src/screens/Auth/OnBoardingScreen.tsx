import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {View} from 'react-native';
import CarouselComponent from '../../layout/Carousel';
import {getStatusBarHeight} from '../../public/helper/GetStatusBarHeight';
import GlobalStyles from '../../public/styles/GlobalStyles';
import NavigationServices from '../../routes/NavigationServices';

const OnBoardingScreen = () => {
  const ToLoginScreen = async () => {
    await AsyncStorage.setItem('ONBOARDING_PASS', 'true');
    NavigationServices.navigate('Login');
  };

  return (
    <View style={[GlobalStyles.bgWhite]}>
      <View
        style={[
          {
            marginTop: getStatusBarHeight(true),
            marginBottom: getStatusBarHeight(true),
          },
        ]}>
        <CarouselComponent onStartPress={ToLoginScreen} />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
