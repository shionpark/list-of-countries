import React from 'react';
import { useRecoilValue } from 'recoil';

import { CountryForm, CountryList } from '@/components';
import { countryState } from '@/atoms';

interface TitleState {
  title: string;
}

const Home = ({ title }: TitleState) => {
  const countries = useRecoilValue(countryState);
  return (
    <>
      <h1>{title}</h1>
      <CountryForm />
      {countries.map((country) => (
        <CountryList key={country.id} {...country} />
      ))}
    </>
  );
};

export default Home;
