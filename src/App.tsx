import React from 'react';
import { CountryForm, CountryList } from './components';
import { CategoryIndex } from './constants';

function App() {
  return (
    <>
      <h1>Travel Lists</h1>
      <CountryForm />
      {Object.values(CategoryIndex).map((category) => (
        <CountryList key={category} categoryName={category} />
      ))}
    </>
  );
}

export default App;
