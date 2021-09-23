import {Colors, Fonts} from '../../assets/themes';
import {iOS} from '../../public/helper/GlobalHelper';
import {createStyles} from '../../styles';

const styles = createStyles({
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: iOS ? '14rem' : '14rem',
    borderRadius: '8rem',
    fontFamily: Fonts.regular,
    fontSize: '14rem',
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  rightIconBtn: {
    padding: '10rem',
  },
  icon: {
    fontSize: '20rem',
    color: Colors.$midGrey,
  },
});

export default styles;
