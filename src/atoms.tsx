import { atom, selector } from 'recoil';
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

export const countrySelector = selector({
  key: 'countrySelector',
  get: ({ get }) => {
    const countries = get(countryState);
    return [
      countries.filter((country) => country.category === 'WANNA_GO'),
      countries.filter((country) => country.category === 'HAVE_BEEN'),
      countries.filter((country) => country.category === 'FAVS'),
    ];
  },
});
