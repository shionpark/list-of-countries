import React from 'react';
import { TravelForm, TravelList } from './components';
import { CategoryIndex } from './constants';

function App() {
  return (
    <>
      <h1>Travel Lists</h1>
      <TravelForm />
      {Object.values(CategoryIndex).map((category) => (
        <TravelList key={category} category={category} />
      ))}
    </>
  );
}

export default App;
