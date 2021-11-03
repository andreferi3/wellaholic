/* eslint-disable react-hooks/exhaustive-deps */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import AppContainer from './routes';

// * Components
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

// * Context
import UserContextProvider from './context/UserContext';
import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import {iOS} from './public/helper/GlobalHelper';
import NavigationServices from './routes/NavigationServices';

const App = () => {
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => unsubscribe();
  }, []);

  const handleDynamicLink = (link: FirebaseDynamicLinksTypes.DynamicLink) => {
    if (link.url === 'https://tropika.on-dev.info') {
      fetchInitialize(link);
    }
  };

  const fetchInitialize = async (
    link: FirebaseDynamicLinksTypes.DynamicLink,
  ) => {
    let source: any;

    let dynamicLink: FirebaseDynamicLinksTypes.DynamicLink = link;

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
  };

  return (
    <UserContextProvider>
      <AppContainer />
      <FlashMessage position="top" />
    </UserContextProvider>
  );
};

export default App;
