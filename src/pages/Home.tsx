import React from 'react';
import { useRecoilValue } from 'recoil';

import { CountryForm, CountriesList } from '@/components';
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
      <CountriesList countries={countries} />
    </>
  );
};

export default Home;
