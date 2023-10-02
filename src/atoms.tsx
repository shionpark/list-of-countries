import { atom, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ATOM_KEY } from '@/constants';

export enum Categories {
  'WANNA_GO' = 'WANNA_GO',
  'HAVE_BEEN' = 'HAVE_BEEN',
  'FAVS' = 'FAVS',
}

export interface ICountry {
  text: string;
  id: number;
  category: string;
}

const { persistAtom } = recoilPersist({
  key: ATOM_KEY.LOCAL_STORAGE,
  storage: localStorage,
});

export const countryState = atom<ICountry[]>({
  key: ATOM_KEY.COUNTRY,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
  key: ATOM_KEY.CATEGORY,
  default: Categories.WANNA_GO,
});

export const countrySelector = selectorFamily({
  key: ATOM_KEY.COUNTRY_SELECTOR,
  get:
    (params) =>
    ({ get }) =>
      get(countryState).filter((country) => country.category === params),
});
