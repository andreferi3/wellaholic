/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  ViewPropTypes,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import PropTypes from 'prop-types';

// * Component
import CText, {ICTextProps} from './CText';
import {Colors} from '../assets/themes';
import GlobalStyles from '../public/styles/GlobalStyles';
import {createStyles} from '../styles';

interface ICButtonProps extends ICTextProps {
  primary?: boolean;
  disabled?: boolean;
  children: any;
  buttonText?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
  centered?: boolean;
  hidden?: boolean;
  onPress?: () => {} | void;
  bold?: boolean;
  spacing?: boolean;
  isLoading?: boolean;
}

const CButton = ({
  primary,
  disabled,
  children,
  buttonText,
  btnStyle,
  centered,
  hidden,
  onPress,
  bold,
  isLoading,
  ...props
}: ICButtonProps) => {
  const buttonStyle = () => {
    if (primary && !buttonText) {
      if (disabled) {
        return [styles.btnPrimary, styles.bgDisabled];
      } else {
        return [styles.btnPrimary, styles.bgPrimary];
      }
    } else {
      return [styles.btnTxt];
    }
  };

  const buttonColor = () => {
    if (primary && !buttonText) {
      if (disabled) {
        return Colors.$midGrey;
      } else {
        return Colors.$white;
      }
    } else if (primary && buttonText) {
      if (disabled) {
        return Colors.$lightGrey;
      }
      return Colors.$primary;
    }
  };

  return (
    <TouchableOpacity
      style={[buttonStyle(), btnStyle]}
      disabled={disabled || hidden || isLoading}
      {...{onPress}}>
      {isLoading ? (
        <View
          style={[GlobalStyles.justifyContentCenter, GlobalStyles.alignCenter]}>
          <ActivityIndicator size="small" color={Colors.$white} />
        </View>
      ) : (
        <CText
          center={centered ? true : false}
          color={buttonColor()}
          bold={bold}
          {...props}
          style={[{opacity: hidden ? 0 : 1}]}>
          {children}
        </CText>
      )}
    </TouchableOpacity>
  );
};

const styles = createStyles({
  btnPrimary: {
    paddingVertical: '14rem',
    borderRadius: '8rem',
    overflow: 'hidden',
  },
  bgPrimary: {
    backgroundColor: Colors.$primary,
  },
  bgDisabled: {
    backgroundColor: '$lightGrey',
  },
  btnTxt: {},
});

CButton.propTypes = {
  buttonText: PropTypes.bool,
  centered: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  btnStyle: ViewPropTypes.style,
  bold: PropTypes.bool,
  spacing: PropTypes.bool,
  isLoading: PropTypes.bool,
};

CButton.defaultProps = {
  buttonText: false,
  centered: true,
  primary: true,
  disabled: false,
  hidden: false,
  bold: true,
  spacing: true,
};

export default CButton;
