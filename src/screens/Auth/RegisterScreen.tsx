import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import CHeader from '../../components/CHeader';

// * Components
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// * Styles & Assets
import {Images} from '../../assets/themes';
import styles from './Styles/LoginStyle';
import FormRegister from '../../layout/Forms/FormRegister';

// * Helper
import NavigationServices from '../../routes/NavigationServices';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CHeader
        title="Register"
        rightButton="Login"
        onRightButtonPress={() => NavigationServices.goBack()}
      />

      <KeyboardAwareScrollView style={styles.contentScrollView}>
        <View style={styles.contentWrapper}>
          {/* Header */}
          <View style={styles.headerLogo}>
            <Image source={Images.logoSm} style={styles.logo} />
          </View>

          {/* Form */}
          <FormRegister onSubmit={values => console.log(values)} />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.backgroundBottomWrapper}>
        <Image
          source={Images.backgroundBottom}
          style={styles.backgroundBottom}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
