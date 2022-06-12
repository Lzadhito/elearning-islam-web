import isObjEqual from 'helpers/isObjEqual';
import type { Promotion } from '../types';
import { DEFAULT_DATA } from './constants';

const generatePromoData = (data: Promotion) => {
  if (isObjEqual(data, DEFAULT_DATA)) {
    return {
      title: 'promo default',
      desc: 'generated desc',
    };
  }
  return data;
};

export default generatePromoData;
