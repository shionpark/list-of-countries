import React from 'react';
import { useRecoilValue } from 'recoil';
import { countrySelector } from '@/atoms';
import { CountryByCategory } from '@/components';

interface categoryNameProp {
  categoryName: string;
}

const CountryList = ({ categoryName }: categoryNameProp) => {
  const countrySelected = useRecoilValue(countrySelector(categoryName));
  console.log(`categoryName: ${categoryName}`);
  return (
    <>
      <h2>{categoryName}</h2>
      {countrySelected.map((country) => (
        <CountryByCategory key={country.id} {...country} />
      ))}
    </>
  );
};

export default CountryList;
