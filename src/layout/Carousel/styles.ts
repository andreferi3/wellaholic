import {width} from '../../public/helper/GlobalHelper';
import {createStyles} from '../../styles';

const styles = createStyles({
  headerLogo: {
    position: 'absolute',
    left: '16rem',
    top: '20rem',
  },
  logoImg: {
    width: '167rem',
    height: '36rem',
    resizeMode: 'contain',
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
  },
  imageOnBoarding: {
    width: `${width - 10}rem`,
    height: `${width - 10}rem`,
    resizeMode: 'contain',
  },
  onBoardingItem: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width,
  },
  carouselFooter: {
    paddingHorizontal: '16rem',
  },
});

export default styles;
