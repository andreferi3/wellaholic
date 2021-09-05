import React, {useState, FC} from 'react';
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';

import {onBoardData} from '../../public/constants/GlobalConstant';

// * Component
import CarouselImage from './CarouselImage';
import Pagination from './Pagination';
import CButton from '../../components/CButton';
import CGroup from '../../components/CGroup';

// * Styling
import styles from './styles';
import {Images} from '../../assets/themes';

interface IProps {
  onStartPress: () => {} | void;
}

const CarouselComponent: FC<IProps> = ({onStartPress}) => {
  let [currIndex, setCurrIndex] = useState(0);
  const _scrollViewRef = React.createRef<any>();

  const setSelectedIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setCurrIndex(selectedIndex);
  };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.headerLogo}>
        <Image source={Images.logoSideText} style={styles.logoImg} />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setSelectedIndex}
        showsHorizontalScrollIndicator={false}
        ref={_scrollViewRef}>
        <CarouselImage data={onBoardData} />
      </ScrollView>
      <View style={styles.carouselFooter}>
        <Pagination currIndex={currIndex} data={onBoardData} />
        <CGroup flex={1}>
          <CButton bold onPress={onStartPress}>
            Get Started
          </CButton>
        </CGroup>
      </View>
    </View>
  );
};

export default CarouselComponent;
