/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../assets/themes';

import GlobalStyles from '../../public/styles/GlobalStyles';

interface IProps {
  data: Array<Record<string, any>>;
  currIndex: string | number;
}

const Pagination: FC<IProps> = ({data, currIndex}) => {
  return (
    <View
      style={[GlobalStyles.flexRowCenter, GlobalStyles.justifyContentCenter]}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            {
              marginVertical: EStyleSheet.value('60rem'),
              backgroundColor:
                index === currIndex ? Colors.$primary : '#E0E0E0',
              width: index === currIndex ? 8 : 8,
              height: index === currIndex ? 8 : 8,
              borderRadius: 50,
              margin: 5,
              opacity: index === currIndex ? 1 : 0.5,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;
