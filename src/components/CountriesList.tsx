import React from 'react';

interface countriesState {
  text: string;
  id: number;
}

const CountriesList = ({ countries }: { countries: countriesState[] }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.text}</li>
      ))}
    </ul>
  );
};

export default CountriesList;
