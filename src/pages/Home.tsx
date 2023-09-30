import React from 'react';
import { useRecoilValue } from 'recoil';

import { CountryForm, CountryList } from '@/components';
import { countrySelector } from '@/atoms';

interface TitleState {
  title: string;
}

const Home = ({ title }: TitleState) => {
  const [wannaGo, haveBeen, favs] = useRecoilValue(countrySelector);
  return (
    <>
      <h1>{title}</h1>
      <CountryForm />
      <br />
      {wannaGo.map((country) => (
        <CountryList key={country.id} {...country} />
      ))}
      <hr />
      <h2>가본 나라들</h2>
      {haveBeen.map((country) => (
        <CountryList key={country.id} {...country} />
      ))}
      <hr />
      <h2>좋아하는 나라들</h2>
      {favs.map((country) => (
        <CountryList key={country.id} {...country} />
      ))}
    </>
  );
};

export default Home;
