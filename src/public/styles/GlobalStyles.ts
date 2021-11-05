import fonts from '../../assets/themes/fonts';
import {createStyles} from '../../styles';
import {getStatusBarHeight} from '../helper/GetStatusBarHeight';

const GlobalStyles = createStyles({
  // * Typhography Font Gilroy
  ibmRegular: {
    fontFamily: fonts.regular,
  },
  ibmRegular10: {
    fontFamily: fonts.regular,
    fontSize: '9.5rem',
  },
  ibmRegular11: {
    fontFamily: fonts.regular,
    fontSize: '10.5rem',
  },
  ibmRegular12: {
    fontFamily: fonts.regular,
    fontSize: '11.5rem',
  },
  ibmRegular13: {
    fontFamily: fonts.regular,
    fontSize: '13rem',
  },
  ibmRegular14: {
    fontFamily: fonts.regular,
    fontSize: '13.5rem',
  },
  ibmRegular15: {
    fontFamily: fonts.regular,
    fontSize: '14.5rem',
  },
  ibmRegular16: {
    fontFamily: fonts.regular,
    fontSize: '15.5rem',
  },
  ibmRegular18: {
    fontFamily: fonts.regular,
    fontSize: '17.5rem',
  },
  ibmRegular19: {
    fontFamily: fonts.regular,
    fontSize: '19rem',
  },
  ibmRegular20: {
    fontFamily: fonts.regular,
    fontSize: '19.5rem',
  },
  ibmRegular22: {
    fontFamily: fonts.regular,
    fontSize: '21.5rem',
  },
  ibmRegular24: {
    fontFamily: fonts.regular,
    fontSize: '23.5rem',
  },
  ibmRegular26: {
    fontFamily: fonts.regular,
    fontSize: '25.5rem',
  },
  ibmRegular28: {
    fontFamily: fonts.regular,
    fontSize: '27.5rem',
  },
  ibmRegular30: {
    fontFamily: fonts.regular,
    fontSize: '29.5rem',
  },
  ibmSemi: {
    fontFamily: fonts.semi,
  },
  ibmSemi10: {
    fontFamily: fonts.semi,
    fontSize: '9.5rem',
  },
  ibmSemi11: {
    fontFamily: fonts.semi,
    fontSize: '10.5rem',
  },
  ibmSemi12: {
    fontFamily: fonts.semi,
    fontSize: '11.5rem',
  },
  ibmSemi13: {
    fontFamily: fonts.semi,
    fontSize: '13rem',
  },
  ibmSemi14: {
    fontFamily: fonts.semi,
    fontSize: '13.5rem',
  },
  ibmSemi15: {
    fontFamily: fonts.semi,
    fontSize: '14.5rem',
  },
  ibmSemi16: {
    fontFamily: fonts.semi,
    fontSize: '15.5rem',
  },
  ibmSemi18: {
    fontFamily: fonts.semi,
    fontSize: '17.5rem',
  },
  ibmSemi19: {
    fontFamily: fonts.semi,
    fontSize: '19rem',
  },
  ibmSemi20: {
    fontFamily: fonts.semi,
    fontSize: '19.5rem',
  },
  ibmSemi22: {
    fontFamily: fonts.semi,
    fontSize: '21.5rem',
  },
  ibmSemi24: {
    fontFamily: fonts.semi,
    fontSize: '23.5rem',
  },
  ibmSemi26: {
    fontFamily: fonts.semi,
    fontSize: '25.5rem',
  },
  ibmSemi28: {
    fontFamily: fonts.semi,
    fontSize: '27.5rem',
  },
  ibmSemi30: {
    fontFamily: fonts.semi,
    fontSize: '29.5rem',
  },
  ibmBold: {
    fontFamily: fonts.bold,
  },
  ibmBold10: {
    fontFamily: fonts.bold,
    fontSize: '9.5rem',
  },
  ibmBold11: {
    fontFamily: fonts.bold,
    fontSize: '10.5rem',
  },
  ibmBold12: {
    fontFamily: fonts.bold,
    fontSize: '11.5rem',
  },
  ibmBold13: {
    fontFamily: fonts.bold,
    fontSize: '13rem',
  },
  ibmBold14: {
    fontFamily: fonts.bold,
    fontSize: '13.5rem',
  },
  ibmBold15: {
    fontFamily: fonts.bold,
    fontSize: '14.5rem',
  },
  ibmBold16: {
    fontFamily: fonts.bold,
    fontSize: '15.5rem',
  },
  ibmBold17: {
    fontFamily: fonts.bold,
    fontSize: '17rem',
  },
  ibmBold18: {
    fontFamily: fonts.bold,
    fontSize: '17.5rem',
  },
  ibmBold20: {
    fontFamily: fonts.bold,
    fontSize: '19.5rem',
  },
  ibmBold22: {
    fontFamily: fonts.bold,
    fontSize: '21.5rem',
  },
  ibmBold24: {
    fontFamily: fonts.bold,
    fontSize: '23.5rem',
  },
  ibmBold26: {
    fontFamily: fonts.bold,
    fontSize: '25.5rem',
  },
  ibmBold28: {
    fontFamily: fonts.bold,
    fontSize: '27.5rem',
  },
  ibmBold30: {
    fontFamily: fonts.bold,
    fontSize: '29.5rem',
  },
  ibmBold36: {
    fontFamily: fonts.bold,
    fontSize: '35rem',
  },

  // * Font Sizing
  size3: {
    fontSize: '3rem',
  },
  size4: {
    fontSize: '4rem',
  },
  size5: {
    fontSize: '5rem',
  },
  size6: {
    fontSize: '6rem',
  },
  size7: {
    fontSize: '7rem',
  },
  size8: {
    fontSize: '8rem',
  },
  size9: {
    fontSize: '9rem',
  },
  size10: {
    fontSize: '10rem',
  },
  size11: {
    fontSize: '11rem',
  },
  size12: {
    fontSize: '12rem',
  },
  size13: {
    fontSize: '13rem',
  },
  size14: {
    fontSize: '14rem',
  },
  size15: {
    fontSize: '15rem',
  },
  size16: {
    fontSize: '16rem',
  },
  size17: {
    fontSize: '17rem',
  },
  size18: {
    fontSize: '18rem',
  },
  size19: {
    fontSize: '19rem',
  },
  size20: {
    fontSize: '19.5rem',
  },
  size21: {
    fontSize: '21rem',
  },
  size22: {
    fontSize: '22rem',
  },
  size224: {
    fontSize: '23rem',
  },
  size24: {
    fontSize: '24rem',
  },
  size25: {
    fontSize: '25rem',
  },
  size26: {
    fontSize: '26rem',
  },
  size27: {
    fontSize: '27rem',
  },
  size28: {
    fontSize: '28rem',
  },
  size29: {
    fontSize: '29rem',
  },
  size30: {
    fontSize: '30rem',
  },
  size31: {
    fontSize: '31rem',
  },
  size32: {
    fontSize: '32rem',
  },
  size33: {
    fontSize: '33rem',
  },
  size34: {
    fontSize: '34rem',
  },

  // * Spacing
  btnChangeSm: {
    paddingVertical: '4rem',
  },
  btnChangeMd: {
    paddingVertical: '6rem',
  },
  container: {
    padding: '19.5rem',
  },
  spaceWrapper: {
    margin: '19.5rem',
  },
  spacing: {
    marginBottom: '4rem',
  },
  mbMd: {
    marginBottom: '10rem',
  },
  mt05: {
    marginTop: '4rem',
  },
  mt1: {
    marginTop: '7rem',
  },
  mt15: {
    marginTop: '10rem',
  },
  mt2: {
    marginTop: '14rem',
  },
  mt21: {
    marginTop: '15rem',
  },
  mt3: {
    marginTop: '20.5rem',
  },
  mt4: {
    marginTop: '28rem',
  },
  mt5: {
    marginTop: '35rem',
  },
  mv1: {
    marginVertical: '7rem',
  },
  mv2: {
    marginVertical: '14rem',
  },
  mv3: {
    marginVertical: '20.5rem',
  },
  mv4: {
    marginVertical: '28rem',
  },
  mv5: {
    marginVertical: '35rem',
  },
  mr1: {
    marginRight: '4rem',
  },
  mr2: {
    marginRight: '7.5rem',
  },
  mr3: {
    marginRight: '11.5rem',
  },
  mr4: {
    marginRight: '16rem',
  },
  mr5: {
    marginRight: '19.5rem',
  },
  mh1: {
    marginHorizontal: '4rem',
  },
  mh2: {
    marginHorizontal: '7.5rem',
  },
  mh3: {
    marginHorizontal: '11.5rem',
  },
  mh4: {
    marginHorizontal: '16rem',
  },
  mh5: {
    marginHorizontal: '19.5rem',
  },
  mb1: {
    marginBottom: '7rem',
  },
  mb15: {
    marginBottom: '10rem',
  },
  mb2: {
    marginBottom: '14rem',
  },
  mb3: {
    marginBottom: '20.5rem',
  },
  mb4: {
    marginBottom: '28rem',
  },
  mb5: {
    marginBottom: '35rem',
  },
  ml1: {
    marginLeft: '4rem',
  },
  ml2: {
    marginLeft: '7.5rem',
  },
  ml3: {
    marginLeft: '11.5rem',
  },
  ml4: {
    marginLeft: '16rem',
  },
  ml5: {
    marginLeft: '19.5rem',
  },
  ml6: {
    marginLeft: '24rem',
  },
  ml7: {
    marginLeft: '27.5rem',
  },
  ml8: {
    marginLeft: '31.5rem',
  },
  ml9: {
    marginLeft: '35.5rem',
  },
  ml10: {
    marginLeft: '39rem',
  },
  pt1: {
    paddingTop: '7rem',
  },
  pt2: {
    paddingTop: '14rem',
  },
  pt3: {
    paddingTop: '20.5rem',
  },
  pt4: {
    paddingTop: '28rem',
  },
  pt5: {
    paddingTop: '35rem',
  },
  pr1: {
    paddingRight: '4rem',
  },
  pr2: {
    paddingRight: '7.5rem',
  },
  pr3: {
    paddingRight: '11.5rem',
  },
  pr4: {
    paddingRight: '16rem',
  },
  pr5: {
    paddingRight: '19.5rem',
  },
  pb1: {
    paddingBottom: '7rem',
  },
  pb2: {
    paddingBottom: '14rem',
  },
  pb3: {
    paddingBottom: '20.5rem',
  },
  pb4: {
    paddingBottom: '28rem',
  },
  pb5: {
    paddingBottom: '35rem',
  },
  pl1: {
    paddingLeft: '4rem',
  },
  pl2: {
    paddingLeft: '7.5rem',
  },
  pl3: {
    paddingLeft: '11.5rem',
  },
  pl4: {
    paddingLeft: '16rem',
  },
  pl5: {
    paddingLeft: '19.5rem',
  },
  pv1: {
    paddingVertical: '7rem',
  },
  pv2: {
    paddingVertical: '14rem',
  },
  pv3: {
    paddingVertical: '20.5rem',
  },
  pv4: {
    paddingVertical: '28rem',
  },
  pv5: {
    paddingVertical: '35rem',
  },
  ph1: {
    paddingHorizontal: '4rem',
  },
  ph2: {
    paddingHorizontal: '7.5rem',
  },
  ph3: {
    paddingHorizontal: '11.5rem',
  },
  ph4: {
    paddingHorizontal: '16rem',
  },
  ph5: {
    paddingHorizontal: '19.5rem',
  },
  resetMargin: {
    marginBottom: '-12rem',
  },
  lnHeightSm: {
    lineHeight: '18rem',
  },
  lnHeightMd: {
    lineHeight: '21rem',
  },
  statusBarHeight: {
    paddingTop: getStatusBarHeight(true),
  },
  textInputDivider: {
    marginBottom: '12rem',
  },

  // * Utilities & Layout
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  flexFill: {
    flex: 1,
  },
  flex1: {
    flex: 0.1,
  },
  flex2: {
    flex: 0.2,
  },
  flex3: {
    flex: 0.3,
  },
  flex4: {
    flex: 0.4,
  },
  flex5: {
    flex: 0.5,
  },
  flex6: {
    flex: 0.6,
  },
  flex7: {
    flex: 0.7,
  },
  flex8: {
    flex: 0.8,
  },
  flex9: {
    flex: 0.9,
  },
  flexHeader: {
    flex: 0.13,
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  textCenter: {
    textAlign: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  contentContainerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  hr: {
    borderTopWidth: 0.5,
    borderTopColor: '#c5c5c5',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  fw500: {
    fontWeight: '500',
  },
  h100: {
    height: '100%',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
});

export default GlobalStyles;
