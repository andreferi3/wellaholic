import {Dimensions, Platform} from 'react-native';

export const {width} = Dimensions.get('screen');
export const iOS = Platform.OS === 'ios';

export function isError(formik: any, fieldName: string) {
  console.log('touched : ', formik.touched[fieldName]);
  if (formik.touched[fieldName] && formik.errors[fieldName]) {
    return formik.errors[fieldName];
  }
}
