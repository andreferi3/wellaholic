import React from 'react';
import {Image, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../assets/themes';
import CText from '../../components/CText';
import {IOnBoardData} from '../../public/constants/GlobalConstant';
import GlobalStyles from '../../public/styles/GlobalStyles';

import styles from './styles';

interface IProps {
  data: IOnBoardData[];
}

const CarouselImage = (props: IProps) => {
  return (
    <>
      {props.data.map((item, index) => (
        <View key={index} style={styles.onBoardingItem}>
          <Image style={[styles.imageOnBoarding]} source={item.image} />

          <CText
            bold
            color={Colors.$black}
            size={EStyleSheet.value('22rem')}
            style={[GlobalStyles.mb15]}>
            {item.title}
          </CText>
          <CText
            center
            color={Colors.$midGrey}
            size={EStyleSheet.value('14rem')}>
            {item.description}
          </CText>
        </View>
      ))}
    </>
  );
};

export default CarouselImage;
