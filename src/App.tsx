import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppContainer from './routes';

// * Components
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

// * Context
import UserContextProvider from './context/UserContext';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <UserContextProvider>
      <AppContainer />
      <FlashMessage position="top" />
    </UserContextProvider>
  );
};

export default App;
