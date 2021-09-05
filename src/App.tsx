import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppContainer from './routes';

// * Components
import SplashScreen from 'react-native-splash-screen';

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
    </UserContextProvider>
  );
};

export default App;
