import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, ICountry, countryState } from '@/atoms';

const CountryByCategory = ({ text, id, category }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setCountries((oldValue) => {
      const targetIndex = oldValue.findIndex((country) => country.id === id);
      const newCountry = { text, id, category: name as any };
      return [...oldValue.slice(0, targetIndex), newCountry, ...oldValue.slice(targetIndex + 1)];
    });
  };

  return (
    <>
      <div>
        <span>{text}</span>
        {category !== Categories.WANNA_GO && (
          <button name={Categories.WANNA_GO} onClick={handleClick}>
            Wanna Go
          </button>
        )}
        {category !== Categories.HAVE_BEEN && (
          <button name={Categories.HAVE_BEEN} onClick={handleClick}>
            Have been
          </button>
        )}
        {category !== Categories.FAVS && (
          <button name={Categories.FAVS} onClick={handleClick}>
            Favorite
          </button>
        )}
      </div>
    </>
  );
};

export default CountryByCategory;
