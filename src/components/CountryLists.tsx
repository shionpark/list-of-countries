import React from 'react';
import { CountriesByCategory } from '@/components';

const CountryLists = ({ categoryIndex }: { categoryIndex: string[] }) => {
  return (
    <>
      {categoryIndex.map((category) => (
        <CountriesByCategory key={category} categoryName={category} />
      ))}
    </>
  );
};

export default CountryLists;
