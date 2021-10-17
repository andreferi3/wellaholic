import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  TextStyle,
} from 'react-native';

// * Component
import CText from './CText';
import Ionicons from 'react-native-vector-icons/Ionicons';

// * Styles & Assets
import {Colors} from '../assets/themes';
import styles from './Styles/CTextInputStyle';
import GlobalStyles from '../public/styles/GlobalStyles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IProps extends TextInputProps {
  label: string;
  error?: string | boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  isLoading?: boolean;
  inputStyle?: StyleProp<TextStyle>;
}

const CTextInput = (props: IProps) => {
  const _inputRef = useRef<any>();

  const [hide, setHide] = useState(true);

  useEffect(() => {
    _inputRef.current?.setNativeProps({
      style: GlobalStyles.ibmRegular14,
    });
  }, [props.isPassword, hide]);

  return (
    <View style={props.containerStyle}>
      <CText
        semi
        style={[GlobalStyles.fw500, GlobalStyles.mb1]}
        color={Colors.$black}>
        {props.label}
      </CText>

      <View>
        <TextInput
          {...props}
          ref={_inputRef}
          selectTextOnFocus
          editable={props.isLoading}
          secureTextEntry={props.isPassword && hide}
          style={[props.inputStyle, styles.textInput]}
        />
        {props.isPassword && (
          <View style={styles.rightIcon}>
            <TouchableOpacity
              onPress={() => setHide(!hide)}
              style={styles.rightIconBtn}>
              <Ionicons name={hide ? 'eye' : 'eye-off'} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {props.error && (
        <CText
          size={EStyleSheet.value('11.5rem')}
          color={Colors.$red}
          style={[GlobalStyles.mt05]}>
          {props.error}
        </CText>
      )}
    </View>
  );
};

export default CTextInput;
