import React from 'react';
import { CountryForm, CountryLists } from './components';
import { CategoryList } from './constants';

function App() {
  return (
    <>
      <h1>Travel Lists</h1>
      <CountryForm />
      <CountryLists categoryIndex={Object.values(CategoryList)} />
    </>
  );
}

export default App;
