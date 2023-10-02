import { atom, selector, selectorFamily } from 'recoil';
import { INPUT_NAME } from '@/constants';

export enum Categories {
  'WANNA_GO' = 'WANNA_GO',
  'HAVE_BEEN' = 'HAVE_BEEN',
  'FAVS' = 'FAVS',
}

export interface ICountry {
  text: string;
  id: number;
  category: Categories;
}

export const countryState = atom<ICountry[]>({
  key: INPUT_NAME,
  default: [],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.WANNA_GO,
});

export const countrySelector = selectorFamily({
  key: 'countrySelector',
  get:
    (params) =>
    ({ get }) =>
      get(countryState).filter((country) => country.category === params),
});
