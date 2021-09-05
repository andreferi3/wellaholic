import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationServices';

const Stack = createStackNavigator();

// * Bunch list of Screen
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/Auth/OnBoardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen';
import EmailSentScreen from '../screens/Auth/EmailSentScreen';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingScreen from '../screens/LoadingScreen';

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="EmailSent" component={EmailSentScreen} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const [token, setToken] = useState<string | null>();
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen name="Main" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
};

export default AppContainer;
