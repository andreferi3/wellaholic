import {object, string, date} from 'yup';

export const FormLoginSchema = object().shape({
  email: string()
    .email('Please input valid email')
    .required('Email is required'),
  password: string().required('Password is required'),
});

export const FormRegisterchema = object().shape({
  email: string()
    .email('Please input valid email')
    .required('Email is required'),
  dob: date().required('Date of Birht is required'),
});

export const FormForgotPasswordSchema = object().shape({
  email: string()
    .email('Please input valid email')
    .required('Email is required'),
});
