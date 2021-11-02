import React, {useContext} from 'react';
import {View, SafeAreaView} from 'react-native';

// * Components
import CHeader from '../../components/CHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormChangePassword from '../../layout/Forms/FormChangePassword';

// * Styles & Assets
import NavigationServices from '../../routes/NavigationServices';
import styles from './Styles/LoginStyle';
import {UserContext} from '../../context/UserContext';
import {ChangePasswordPayload} from '../../public/services/models/UserModels';
import {RouteProp, useRoute} from '@react-navigation/core';
import {RootStackRoutesProps} from '../../routes';

type TValues = {
  password: string;
  confirmPassword: string;
};

const ChangePasswordScreen = () => {
  const {loading, changePassword} = useContext(UserContext);

  const route = useRoute<RouteProp<RootStackRoutesProps, 'ChangePassword'>>();

  const handleSubmit = (values: TValues) => {
    const payload: ChangePasswordPayload = {
      new_password: values.password,
      email: route.params.email ?? '',
      code: route.params.code ?? '',
    };

    console.log(payload);

    changePassword(payload);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <CHeader
        customLeft
        onLeftButtonPress={() => NavigationServices.replace('Auth')}
      />

      <KeyboardAwareScrollView style={styles.contentScrollView}>
        <View style={styles.contentWrapper}>
          <FormChangePassword onSubmit={handleSubmit} isLoading={loading} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
