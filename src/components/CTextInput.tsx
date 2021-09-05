import React, {useState} from 'react';
import {
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextInput,
  TouchableOpacity,
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
}

const CTextInput = (props: IProps) => {
  const [hide, setHide] = useState(true);

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
          editable={props.isLoading}
          secureTextEntry={props.isPassword && hide}
          style={[
            styles.textInput,
            {
              paddingRight: EStyleSheet.value(
                props.isPassword ? '35rem' : '14rem',
              ),
            },
          ]}
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
