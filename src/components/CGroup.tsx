import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import styles from './Styles/CButtonStyle';

interface IProps {
  children: ReactNode;
  centered?: boolean;
  flex?: number;
  style?: StyleProp<ViewStyle>;
}

const CGroup = ({children, centered = true, flex, style}: IProps) => {
  return (
    <View
      style={[
        styles.buttonGroupWrapper,
        centered && styles.buttonCenter,
        style,
      ]}>
      <View style={{flex}}>{children}</View>
    </View>
  );
};

export default CGroup;
