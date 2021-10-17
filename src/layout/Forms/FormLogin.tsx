import React from 'react';
import {View} from 'react-native';

// * Components
import {useFormik} from 'formik';
import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';

// * Styles & Assets
import GlobalStyles from '../../public/styles/GlobalStyles';

// * Helper
import {FormLoginSchema} from '../../public/constants/FormSchema';
import {isError} from '../../public/helper/GlobalHelper';
import NavigationServices from '../../routes/NavigationServices';

export interface FormLoginProps {
  onSubmit: (values: any) => {} | void;
  isLoading: boolean;
}

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = (props: FormLoginProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: FormLoginSchema,
    onSubmit: values => {
      props.onSubmit(values);
    },
  });

  const isValid = !formik.isValid || formik.submitCount > 2 || !formik.dirty;

  return (
    <View>
      <CTextInput
        containerStyle={[GlobalStyles.mb3]}
        label="Email"
        placeholder="Input your email"
        autoCapitalize="none"
        onChangeText={formik.handleChange('email')}
        error={isError(formik, 'email')}
        isLoading={!props.isLoading}
      />

      <CTextInput
        isPassword
        label="Password"
        placeholder="Input your password"
        onChangeText={formik.handleChange('password')}
        error={isError(formik, 'password')}
        isLoading={!props.isLoading}
      />

      <View style={[GlobalStyles.alignEnd, GlobalStyles.mt2, GlobalStyles.mb4]}>
        <CButton
          buttonText
          centered={false}
          onPress={() => NavigationServices.navigate('ForgotPassword')}>
          Forgot Password?
        </CButton>
      </View>

      <CButton
        isLoading={props.isLoading}
        onPress={formik.handleSubmit}
        disabled={isValid}>
        Login
      </CButton>
    </View>
  );
};

export default FormLogin;
