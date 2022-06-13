import {Dimensions, Platform} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

export const {width, height} = Dimensions.get('screen');
export const iOS = Platform.OS === 'ios';

export function isError(formik: any, fieldName: string) {
  console.log('touched : ', formik.touched[fieldName]);
  if (formik.touched[fieldName] && formik.errors[fieldName]) {
    return formik.errors[fieldName];
  }
}

export async function buildLink() {
  const link = await dynamicLinks().buildLink({
    link: 'https://app.wellaholic.com',
    domainUriPrefix: 'https://wellaholic.page.link',
    analytics: {
      campaign: 'change-password',
      source: 'andreferi135@gmail.com&198932',
    },
    android: {
      packageName: 'com.wellaholic',
    },
    ios: {
      bundleId: 'com.wellaholic',
    },
  });

  return link;
}
