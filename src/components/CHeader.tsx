import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import CText from './CText';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Styles/CHeaderStyle';
import GlobalStyles from '../public/styles/GlobalStyles';
import NavigationServices from '../routes/NavigationServices';
import {Colors} from '../assets/themes';

interface IProps {
  title?: string;
  rightButton?: string;
  onRightButtonPress?: () => {} | void;
}

const CHeader = ({title, rightButton, onRightButtonPress}: IProps) => {
  return (
    <View style={styles.header}>
      <View
        style={[
          GlobalStyles.flexRowCenter,
          GlobalStyles.flexFill,
          GlobalStyles.justifyContentCenter,
        ]}>
        <TouchableOpacity
          onPress={() => NavigationServices.goBack()}
          style={styles.leftButton}>
          <AntDesign name="left" style={[GlobalStyles.size20]} />
        </TouchableOpacity>
        <CText semi style={GlobalStyles.fw500} color={Colors.$black}>
          {title}
        </CText>
        {rightButton && (
          <TouchableOpacity
            onPress={onRightButtonPress}
            style={styles.rightButton}>
            <CText semi style={GlobalStyles.fw500} color={Colors.$midGrey}>
              {rightButton}
            </CText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CHeader;
