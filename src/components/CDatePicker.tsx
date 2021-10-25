import React, {useState} from 'react';
import moment from 'moment';
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
import Entypo from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker';

// * Styles & Assets
import {Colors} from '../assets/themes';
import styles from './Styles/CTextInputStyle';
import GlobalStyles from '../public/styles/GlobalStyles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IProps extends TextInputProps {
  label: string;
  selectedDate: (date: Date) => {} | void;
  error?: string | boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

const today = new Date();

const CDatePicker = (props: IProps) => {
  const [date, setDate] = useState(moment().subtract(17, 'year').toDate());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <View style={props.containerStyle}>
      <CText
        semi
        style={[GlobalStyles.fw500, GlobalStyles.mb1]}
        color={Colors.$black}>
        {props.label}
      </CText>

      <TouchableOpacity
        disabled={props.isLoading}
        onPress={() => setOpen(true)}
        activeOpacity={1}>
        <TextInput
          {...props}
          value={selectedDate && moment(date).format('DD/MM/YYYY')}
          editable={false}
          pointerEvents="none"
          style={[
            styles.textInput,
            {
              paddingRight: EStyleSheet.value('35rem'),
            },
          ]}
        />
        <View style={styles.rightIcon}>
          <View style={styles.rightIconBtn}>
            <Entypo name="calendar" style={styles.icon} />
          </View>
        </View>
      </TouchableOpacity>

      {props.error && (
        <CText
          size={EStyleSheet.value('11.5rem')}
          color={Colors.$red}
          style={[GlobalStyles.mt05]}>
          {props.error}
        </CText>
      )}

      <DatePicker
        modal
        open={open}
        date={date}
        maximumDate={today}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
          setSelectedDate(value);
          props.selectedDate(value);
        }}
        mode="date"
        onCancel={() => {
          setOpen(false);
        }}
        onDateChange={value => console.log(value)}
      />
    </View>
  );
};

export default CDatePicker;
