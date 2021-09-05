import {ImageURISource} from 'react-native';
import {Images} from '../../assets/themes';

export interface IOnBoardData {
  _id: string;
  title: string;
  description: string;
  image: ImageURISource;
}

export const onBoardData: IOnBoardData[] = [
  {
    _id: '1',
    title: 'Deals & Voucher',
    description:
      'Get deals and voucher shopping site for beauty,\nwellness and fitness services',
    image: Images.discount1,
  },
  {
    _id: '2',
    title: 'Many Choices of Merchants',
    description:
      'There is so many merchants across many key\ncategories of beauty, wellness and fitness',
    image: Images.discount2,
  },
];
