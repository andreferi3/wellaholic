import {createStyles} from '../../styles';

const styles = createStyles({
  header: {
    flexDirection: 'row',
    paddingHorizontal: '14rem',
    paddingTop: '10rem',
    paddingBottom: '15rem',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftButton: {
    position: 'absolute',
    left: 0,
    paddingRight: '10rem',
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    paddingLeft: '10rem',
  },
});

export default styles;
