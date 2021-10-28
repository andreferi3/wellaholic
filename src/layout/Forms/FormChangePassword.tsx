import React from 'react';
import {View} from 'react-native';

// * Components
import CText from '../../components/CText';
import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';
import {useFormik} from 'formik';
import {FormChangePasswordSchema} from '../../public/constants/FormSchema';

// * Styles & Assets
import GlobalStyles from '../../public/styles/GlobalStyles';
import {Colors} from '../../assets/themes';
import EStyleSheet from 'react-native-extended-stylesheet';
import {isError} from '../../public/helper/GlobalHelper';

interface FormChangePasswordProps {
  onSubmit: (values: any) => {} | void;
  isLoading: boolean;
}

const FormChangePassword = (props: FormChangePasswordProps) => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: FormChangePasswordSchema,
    onSubmit: values => {
      props.onSubmit(values);
    },
  });

  return (
    <View>
      <View style={[GlobalStyles.alignCenter, GlobalStyles.mt21]}>
        <CText bold color={Colors.$black} size={EStyleSheet.value('24rem')}>
          Create new password
        </CText>
        <CText
          center
          size={EStyleSheet.value('13.5rem')}
          color={Colors.$black}
          style={[GlobalStyles.mt15]}>
          Enter new password below
        </CText>
      </View>

      <CTextInput
        isPassword
        containerStyle={[GlobalStyles.mt5]}
        label="New Password"
        placeholder="Input your new password"
        autoCapitalize="none"
        onChangeText={formik.handleChange('password')}
        error={isError(formik, 'password')}
      />

      <CTextInput
        isPassword
        containerStyle={[GlobalStyles.mt3, GlobalStyles.mb5]}
        label="Re-type New Password"
        placeholder="Re-type your new password"
        autoCapitalize="none"
        onChangeText={formik.handleChange('confirmPassword')}
        error={isError(formik, 'confirmPassword')}
      />

      <CButton onPress={formik.handleSubmit} isLoading={props.isLoading}>
        Submit
      </CButton>
    </View>
  );
};

export default FormChangePassword;
