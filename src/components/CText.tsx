import React from 'react';
import {Text, TextStyle, TextProps, StyleProp} from 'react-native';

// * Style & Assetss
import {Fonts} from '../assets/themes';
import EStyleSheet from 'react-native-extended-stylesheet';

export interface ICTextProps extends TextProps {
  children: any;
  regular?: boolean;
  bold?: boolean;
  semi?: boolean;
  size?: number | string;
  white?: boolean;
  color?: string | boolean;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  title?: boolean;
}

const CText = ({
  children,
  regular,
  bold,
  size,
  white,
  color,
  center,
  style,
  title,
  semi,
  ...props
}: ICTextProps) => {
  const textStyle = (fontFamily: string) => {
    return {
      fontFamily,
      fontSize: title
        ? EStyleSheet.value('26rem')
        : size || EStyleSheet.value('15rem'),
      color: !color ? (white ? 'white' : 'black') : color,
      textAlign: center ? 'center' : 'left',
    };
  };

  const selectStyle = () => {
    if (bold) {
      return textStyle(Fonts.bold);
    }

    if (regular) {
      return textStyle(Fonts.regular);
    }

    if (semi) {
      return textStyle(Fonts.semi);
    }

    return textStyle(Fonts.regular);
  };

  return (
    <Text style={[selectStyle(), style]} {...props}>
      {children}
    </Text>
  );
};

export default CText;
