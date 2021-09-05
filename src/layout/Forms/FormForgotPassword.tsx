/* eslint-disable quotes */
import React from 'react';
import {View} from 'react-native';

// * Components
import CText from '../../components/CText';
import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';
import {useFormik} from 'formik';
import {FormForgotPasswordSchema} from '../../public/constants/FormSchema';

// * Styles & Assets
import GlobalStyles from '../../public/styles/GlobalStyles';
import {Colors} from '../../assets/themes';
import EStyleSheet from 'react-native-extended-stylesheet';
import {isError} from '../../public/helper/GlobalHelper';

interface FormForgotPasswordProps {
  onSubmit: (values: any) => {} | void;
}

const FormForgotPassword = (props: FormForgotPasswordProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: FormForgotPasswordSchema,
    onSubmit: values => {
      props.onSubmit(values);
    },
  });

  const isValid = !formik.isValid || formik.isSubmitting || !formik.dirty;

  return (
    <View>
      <View style={[GlobalStyles.alignCenter, GlobalStyles.mt21]}>
        <CText bold color={Colors.$black} size={EStyleSheet.value('24rem')}>
          Forgot Password
        </CText>
        <CText
          center
          size={EStyleSheet.value('13.5rem')}
          color={Colors.$black}
          style={[GlobalStyles.mt15]}>
          {`Enter your username or email, You will receive a link to create a new password via email.`}
        </CText>
      </View>

      <CTextInput
        containerStyle={[GlobalStyles.mv5]}
        label="Email"
        placeholder="Input your email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={formik.handleChange('email')}
        error={isError(formik, 'email')}
      />

      <CButton onPress={formik.handleSubmit} disabled={isValid}>
        Send
      </CButton>
    </View>
  );
};

export default FormForgotPassword;
