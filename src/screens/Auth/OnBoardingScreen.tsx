import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {SafeAreaView} from 'react-native';
import CarouselComponent from '../../layout/Carousel';
import GlobalStyles from '../../public/styles/GlobalStyles';
import NavigationServices from '../../routes/NavigationServices';

const OnBoardingScreen = () => {
  const ToLoginScreen = async () => {
    await AsyncStorage.setItem('ONBOARDING_PASS', 'true');
    NavigationServices.navigate('Login');
  };

  return (
    <SafeAreaView style={GlobalStyles.bgWhite}>
      <CarouselComponent onStartPress={ToLoginScreen} />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
