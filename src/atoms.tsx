import { atom } from 'recoil';
import { INPUT_NAME } from '@/constants';

export interface ICountry {
  text: string;
  id: number;
  category: 'WANNA_GO' | 'HAVE_BEEN' | 'FAVS';
}

export const countryState = atom<ICountry[]>({
  key: INPUT_NAME,
  default: [],
});
