import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ICountry, countryState } from '@/atoms';

const CountryList = ({ text, id, category }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(`button name : ${name}`);
    setCountries((oldValue) => {
      const targetIndex = oldValue.findIndex((country) => country.id === id);
      const newCountry = { text, id, category: name };
      return [...oldValue.slice(0, targetIndex), newCountry, ...oldValue.slice(targetIndex + 1)];
    });
  };
  return (
    <>
      <div>
        <span>{text}</span>
        {category !== 'WANNA_GO' && (
          <button name="WANNA_GO" onClick={handleClick}>
            Wanna Go
          </button>
        )}
        {category !== 'HAVE_BEEN' && (
          <button name="HAVE_BEEN" onClick={handleClick}>
            Have been
          </button>
        )}
        {category !== 'FAVS' && (
          <button name="FAVS" onClick={handleClick}>
            Favorite
          </button>
        )}
      </div>
    </>
  );
};

export default CountryList;
