import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

// * Components
import {useFormik} from 'formik';
import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';
import CText from '../../components/CText';
import CDatePicker from '../../components/CDatePicker';

// * Styles & Assets
import GlobalStyles from '../../public/styles/GlobalStyles';
import {Colors} from '../../assets/themes';
import colors from '../../assets/themes/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

// * Helper
import {FormRegisterchema} from '../../public/constants/FormSchema';
import {isError} from '../../public/helper/GlobalHelper';

export interface FormRegisterProps {
  onSubmit: (values: any) => {} | void;
}

const initialValues = {
  email: '',
  dob: '',
};

const FormRegister = (props: FormRegisterProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: FormRegisterchema,
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
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={formik.handleChange('email')}
        error={isError(formik, 'email')}
      />

      <CDatePicker
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        selectedDate={date => formik.setFieldValue('dob', date)}
        error={isError(formik, 'dob')}
      />

      <View style={[GlobalStyles.mt2, GlobalStyles.mb4]}>
        <CText color={Colors.$midGrey}>Password will send to your email.</CText>
      </View>

      <CButton
        onPress={formik.handleSubmit}
        disabled={isValid}
        btnStyle={[GlobalStyles.mb2]}>
        Register
      </CButton>

      <View>
        <CText
          size={EStyleSheet.value('12rem')}
          style={[GlobalStyles.lnHeightSm]}
          color={colors.$midGrey}>
          *by clicking register, you agree with our{' '}
          <TouchableWithoutFeedback>
            <CText size={EStyleSheet.value('12rem')} color="#2F80ED">
              Terms Condition
            </CText>
          </TouchableWithoutFeedback>{' '}
          &amp;{' '}
          <TouchableWithoutFeedback>
            <CText size={EStyleSheet.value('12rem')} color="#2F80ED">
              Privacy Policy
            </CText>
          </TouchableWithoutFeedback>
        </CText>
      </View>
    </View>
  );
};

export default FormRegister;
