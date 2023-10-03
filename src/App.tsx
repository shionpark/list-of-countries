import React from 'react';
import { TravelForm, TravelList } from './components';
import { Categories } from './atoms';

function App() {
  return (
    <>
      <h1>Travel Lists</h1>
      <TravelForm />
      {Object.values(Categories).map((category) => (
        <TravelList key={category} category={category} />
      ))}
    </>
  );
}

export default App;
