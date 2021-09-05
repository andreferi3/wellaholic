import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CHeader from '../../components/CHeader';

// * Components
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormForgotPassword from '../../layout/Forms/FormForgotPassword';

// * Styles & Assets
import styles from './Styles/LoginStyle';
import NavigationServices from '../../routes/NavigationServices';

const ForgetPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CHeader />

      <KeyboardAwareScrollView style={styles.contentScrollView}>
        <View style={styles.contentWrapper}>
          <FormForgotPassword
            onSubmit={() => NavigationServices.navigate('EmailSent')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
