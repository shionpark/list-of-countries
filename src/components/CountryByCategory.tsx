import React from 'react';
import { Categories, ICountry } from '@/atoms';
import { useIndexingCountry } from '@/hooks';

const CountryByCategory = ({ text, id, category }: ICountry) => {
  const { onClick, newCategory } = useIndexingCountry({ text, id, category });
  return (
    <>
      <div>
        <span>{text}</span>
        {newCategory !== Categories.WANNA_GO && (
          <button name={Categories.WANNA_GO} onClick={onClick}>
            Wanna Go
          </button>
        )}
        {newCategory !== Categories.HAVE_BEEN && (
          <button name={Categories.HAVE_BEEN} onClick={onClick}>
            Have been
          </button>
        )}
        {newCategory !== Categories.FAVS && (
          <button name={Categories.FAVS} onClick={onClick}>
            Favorite
          </button>
        )}
      </div>
    </>
  );
};

export default CountryByCategory;
