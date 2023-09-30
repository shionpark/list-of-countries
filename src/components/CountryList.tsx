import React from 'react';
import { ICountry } from '@/atoms';

const CountryList = ({ text }: ICountry) => {
  return (
    <>
      <div>
        <span>{text}</span>
      </div>
    </>
  );
};

export default CountryList;
