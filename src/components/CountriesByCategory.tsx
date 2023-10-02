import React from 'react';
import { useRecoilValue } from 'recoil';
import { countrySelector } from '@/atoms';
import { CountryList } from '@/components';

const CountriesByCategory = ({ categoryName }: { categoryName: string }) => {
  const categoryItems = useRecoilValue(countrySelector(categoryName));
  return (
    <>
      <h2>{categoryName}</h2>
      {categoryItems.map((country) => (
        <CountryList key={country.id} {...country} />
      ))}
    </>
  );
};

export default CountriesByCategory;
