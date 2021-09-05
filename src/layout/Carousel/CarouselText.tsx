/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

// * Component
import CText from '../../components/CText';

// * Style
import GlobalStyles from '../../public/styles/GlobalStyles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IProps {
  data: Array<Record<string, any>>;
  currIndex: string | number;
}

const CarouselText = (props: IProps) => {
  return (
    <>
      {props.data.map((item, index) => (
        <View
          key={index}
          style={[
            {display: index === props.currIndex ? 'flex' : 'none'},
            GlobalStyles.justifyContentCenter,
            GlobalStyles.alignCenter,
          ]}>
          <CText
            white
            size={EStyleSheet.value('26rem')}
            style={[GlobalStyles.mb4, GlobalStyles.ibmBold]}>
            {item.title}
          </CText>
          <CText
            center
            white
            style={[GlobalStyles.mb4, GlobalStyles.lnHeightMd]}>
            {item.description}
          </CText>
        </View>
      ))}
    </>
  );
};

export default CarouselText;
