import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import CHeader from '../../components/CHeader';

// * Components
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// * Styles & Assets
import styles from './Styles/LoginStyle';
import NavigationServices from '../../routes/NavigationServices';
import GlobalStyles from '../../public/styles/GlobalStyles';
import {Colors, Images} from '../../assets/themes';
import CText from '../../components/CText';
import EStyleSheet from 'react-native-extended-stylesheet';
import CButton from '../../components/CButton';

const EmailSentScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CHeader />

      <KeyboardAwareScrollView style={styles.contentScrollView}>
        <View style={[styles.contentWrapper, GlobalStyles.alignCenter]}>
          <Image source={Images.checked} style={styles.checkedImg} />

          <View style={[GlobalStyles.mb5]}>
            <CText
              bold
              color={Colors.$black}
              size={EStyleSheet.value('20rem')}
              style={[GlobalStyles.mb3]}>
              Reset password link has been sent{' '}
            </CText>
            <CText
              center
              style={[GlobalStyles.lnHeightMd]}
              size={EStyleSheet.value('14.5rem')}>
              We have sent reset password link to ridwan@maven.com. it may take
              several minutes to show up on your inbox. please wait at least 10
              minutes before attemping another reset
            </CText>
          </View>

          <View
            style={[
              GlobalStyles.flexRowCenter,
              GlobalStyles.flexFill,
              GlobalStyles.mt4,
            ]}>
            <CButton
              btnStyle={[GlobalStyles.flexFill]}
              onPress={() => NavigationServices.pop(2)}>
              Back
            </CButton>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EmailSentScreen;
